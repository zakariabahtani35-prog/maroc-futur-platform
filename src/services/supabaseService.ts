import { supabase } from '../lib/supabase';

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface ProfileData {
  id: string;
  user_id: string;
  avatar: string;
  additional_info: any;
}

// Mock data for test mode
const MOCK_USER: UserData = {
  id: 'mock-id',
  email: 'test@example.com',
  name: 'Test User',
  role: 'user'
};

const MOCK_PROFILE: ProfileData = {
  id: 'mock-profile-id',
  user_id: 'mock-id',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mock',
  additional_info: {}
};

const isSupabaseConnected = () => {
  return !!(import.meta as any).env.VITE_SUPABASE_URL && !!(import.meta as any).env.VITE_SUPABASE_ANON_KEY;
};

export const supabaseService = {
  async getUserData(userId: string) {
    if (!isSupabaseConnected()) {
      console.log('Using mock user data');
      return MOCK_USER;
    }
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data as UserData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return MOCK_USER; // Fallback to mock on error in test mode
    }
  },

  async getProfileData(userId: string) {
    if (!isSupabaseConnected()) {
      console.log('Using mock profile data');
      return MOCK_PROFILE;
    }
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      return data as ProfileData;
    } catch (error) {
      console.error('Error fetching profile data:', error);
      return MOCK_PROFILE; // Fallback to mock on error in test mode
    }
  },

  async createUserData(userData: UserData) {
    if (!isSupabaseConnected()) return userData;
    const { data, error } = await supabase
      .from('users')
      .upsert(userData)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async createProfileData(profileData: Partial<ProfileData>) {
    if (!isSupabaseConnected()) return profileData;
    const { data, error } = await supabase
      .from('profiles')
      .upsert(profileData)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};
