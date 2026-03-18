import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { supabaseService, UserData, ProfileData } from '../../services/supabaseService';

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
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, userData, profileData, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAppAuth must be used within an AuthProvider');
  }
  return context;
};
