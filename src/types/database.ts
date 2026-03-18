export type UserRole = 'admin' | 'user';

export interface Profile {
  id: string;
  email: string;
  role: UserRole;
  full_name?: string;
  avatar_url?: string;
}

export interface Page {
  id: string;
  title: string;
  content: string;
  created_at: string;
  created_by: string;
}

export interface Permission {
  id: string;
  user_id: string;
  page_id: string;
  created_at: string;
}
