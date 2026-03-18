import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { supabase } from '../lib/supabase';
import { supabaseService } from '../services/supabaseService';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const isSupabaseConnected = () => {
    return true;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isSupabaseConnected()) {
      console.log('Test mode: Simulating login');
      setTimeout(() => {
        navigate(from, { replace: true });
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      if (isLogin) {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (authError) {
          if (authError.message.includes('Failed to fetch')) {
            throw new Error(t('auth.toast_conn_error'));
          }
          throw authError;
        }
      } else {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (authError) {
          if (authError.message.includes('Failed to fetch')) {
            throw new Error(t('auth.toast_conn_error'));
          }
          throw authError;
        }

        if (authData.user) {
          // Create user record in database
          await supabaseService.createUserData({
            id: authData.user.id,
            email: authData.user.email!,
            name: name,
            role: 'user'
          });

          // Create initial profile
          await supabaseService.createProfileData({
            user_id: authData.user.id,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${authData.user.id}`,
            additional_info: {}
          });
        }
      }
      
      toast.success(isLogin ? t('auth.toast_success_login') : t('auth.toast_success_signup'));
      navigate(from, { replace: true });
    } catch (err: any) {
      toast.error(err.message || t('auth.toast_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-6 bg-brand-bg-primary flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-black/5 overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Left Side: Form */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-12">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[1.5px] bg-gradient-to-tr from-brand-red via-brand-green to-brand-red mb-8">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden border border-white/50">
                <img 
                  src="https://wa9tna.wordpress.com/wp-content/uploads/2026/02/d8aad8b5d985d98ad985-d8a8d8afd988d986-d8b9d986d988d8a7d986-8.png" 
                  alt="AMA Logo" 
                  className="w-full h-full object-contain opacity-100 visible block"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/logo/200/200';
                  }}
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text-primary mb-4">
              {isLogin ? t('auth.welcome_back') : t('auth.create_account')}
            </h1>
            <p className="text-brand-text-secondary font-medium">
              {isLogin 
                ? t('auth.login_desc') 
                : t('auth.signup_desc')}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-4">
                  {t('auth.full_name')}
                </label>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-text-secondary group-focus-within:text-brand-green transition-colors">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('auth.name_placeholder')}
                    className="w-full bg-brand-bg-secondary border border-transparent focus:border-brand-green/30 focus:bg-white focus:ring-4 focus:ring-brand-green/10 rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-medium text-brand-text-primary"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary ml-4">
                {t('auth.email_address')}
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-text-secondary group-focus-within:text-brand-green transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-brand-bg-secondary border border-transparent focus:border-brand-green/30 focus:bg-white focus:ring-4 focus:ring-brand-green/10 rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-medium text-brand-text-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary">
                  {t('auth.password')}
                </label>
                {isLogin && (
                  <button type="button" className="text-xs font-bold text-brand-red hover:text-brand-green transition-colors">
                    {t('auth.forgot_password')}
                  </button>
                )}
              </div>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-text-secondary group-focus-within:text-brand-green transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-brand-bg-secondary border border-transparent focus:border-brand-green/30 focus:bg-white focus:ring-4 focus:ring-brand-green/10 rounded-2xl py-4 pl-14 pr-14 outline-none transition-all font-medium text-brand-text-primary"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-text-secondary hover:text-brand-green transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-red/20 hover:bg-brand-green hover:shadow-brand-green/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>{t('auth.loading') || 'Chargement...'}</span>
                </div>
              ) : (
                <>
                  {isLogin ? t('auth.login_btn') : t('auth.signup_btn')}
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-brand-text-primary/5 text-center">
            <p className="text-sm font-bold text-brand-text-secondary">
              {isLogin ? t('auth.no_account') : t('auth.has_account')} {' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-brand-red hover:text-brand-green transition-colors"
                type="button"
              >
                {isLogin ? t('auth.signup_link') : t('auth.login_link')}
              </button>
            </p>
          </div>
        </div>

        {/* Right Side: Image/Branding */}
        <div className="hidden lg:block flex-1 relative bg-brand-bg-secondary p-12">
          <div className="h-full w-full rounded-[2rem] overflow-hidden relative group">
            <img 
              src="https://wa9tna.wordpress.com/wp-content/uploads/2026/03/597432733_1300872292083513_3256018048410014083_n.jpg" 
              alt="Login Visual" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-text-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">
                {t('auth.visual_title')}
              </h2>
              <p className="text-white/70 font-medium">
                {t('auth.visual_desc')}
              </p>
            </div>
          </div>
          
          {/* Decorative Door Effect (Inspired by screenshot) */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-32 bg-white rounded-r-full shadow-xl border-y border-r border-black/5 flex items-center justify-center">
             <div className="w-2 h-2 bg-brand-red rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
