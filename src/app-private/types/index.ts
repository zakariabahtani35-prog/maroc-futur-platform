export type Role = 'user' | 'admin' | 'super_admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: Role;
  photoURL?: string;
  createdAt: string;
  lastLogin: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeSessions: number;
  revenue: number;
  growth: number;
}
