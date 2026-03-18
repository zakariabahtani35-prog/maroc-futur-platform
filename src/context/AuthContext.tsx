import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';
import { supabaseService, UserData, ProfileData } from '../services/supabaseService';

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  profileData: ProfileData | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    const checkSession = async () => {
      if (!isSupabaseConnected()) {
        console.log('Test mode: Simulating session check');
        setLoading(false);
        return;
      }
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        
        if (currentUser) {
          await fetchFullProfile(currentUser.id);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = isSupabaseConnected() 
      ? supabase.auth.onAuthStateChange(async (_event, session) => {
          const currentUser = session?.user ?? null;
          setUser(currentUser);
          
          if (currentUser) {
            await fetchFullProfile(currentUser.id);
          } else {
            setUserData(null);
            setProfileData(null);
          }
          setLoading(false);
        })
      : { data: { subscription: { unsubscribe: () => {} } } };

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchFullProfile = async (userId: string) => {
    const [uData, pData] = await Promise.all([
      supabaseService.getUserData(userId),
      supabaseService.getProfileData(userId)
    ]);
    
    setUserData(uData);
    setProfileData(pData);
  };

  const signOut = async () => {
    if (isSupabaseConnected()) {
      await supabase.auth.signOut();
    } else {
      setUser(null);
      setUserData(null);
      setProfileData(null);
    }
  };

  const isSupabaseConnected = () => {
    return !!(import.meta as any).env.VITE_SUPABASE_URL && !!(import.meta as any).env.VITE_SUPABASE_ANON_KEY;
  };

  return (
    <AuthContext.Provider value={{ user, userData, profileData, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
