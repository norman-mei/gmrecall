'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
  Check,
  X,
  Loader2,
  Mail,
  User,
  Lock,
  LogOut,
  ShieldAlert,
  ChevronRight,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useAuth } from '@/context/AuthContext';

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

// --- Types ---

type SignupFormState = {
  email: string;
  confirmEmail: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type SignupFormErrors = Partial<Record<keyof SignupFormState, string>>;

type LoginFormState = {
  identifier: string;
  password: string;
  rememberMe: boolean;
};

// --- Initial States ---

const initialSignup: SignupFormState = {
  email: '',
  confirmEmail: '',
  username: '',
  password: '',
  confirmPassword: ''
};

const initialLogin: LoginFormState = {
  identifier: '',
  password: '',
  rememberMe: false
};

// --- Reusable Components ---

const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
  helperText,
  required,
  autoComplete,
  icon: Icon
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  autoComplete?: string;
  icon?: React.ElementType;
}) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-[var(--text)]/80">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <div className="relative group">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] transition-colors group-focus-within:text-[var(--primary)]">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={cx(
          'w-full rounded-xl border bg-[var(--input-bg)] px-3 py-2.5 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted-foreground)]/50',
          Icon ? 'pl-10' : '',
          error
            ? 'border-rose-500/50 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10'
            : 'border-[var(--border)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10'
        )}
      />
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-1.5 text-xs font-medium text-rose-500"
      >
        <AlertCircle className="h-3 w-3" />
        {error}
      </motion.p>
    )}
    {helperText && !error && <p className="text-xs text-[var(--muted-foreground)]">{helperText}</p>}
  </div>
);

// --- Main Component ---

export default function AccountPanel() {
  const searchParams = useSearchParams();
  const verifiedState = searchParams.get('verified');
  const router = useRouter();

  const { user, loading, refresh, logoutLocally } = useAuth();

  // Auth Form State
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Login State
  const [loginForm, setLoginForm] = useState<LoginFormState>(initialLogin);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Signup State
  const [signupForm, setSignupForm] = useState<SignupFormState>(initialSignup);
  const [signupErrors, setSignupErrors] = useState<SignupFormErrors>({});
  const [signupStatus, setSignupStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [signupApiError, setSignupApiError] = useState<string | null>(null);

  // Resend Verification State
  const [resendStatus, setResendStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [resendMessage, setResendMessage] = useState<string | null>(null);

  // Account Management States
  const [emailForm, setEmailForm] = useState({ newEmail: '', currentPassword: '' });
  const [emailStatus, setEmailStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [emailMessage, setEmailMessage] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [passwordStatus, setPasswordStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [usernameForm, setUsernameForm] = useState({ username: '' });
  const [usernameStatus, setUsernameStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [usernameMessage, setUsernameMessage] = useState<string | null>(null);
  const [usernameError, setUsernameError] = useState<string | null>(null);

  // Danger Zone State
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteProgress, setDeleteProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // --- Effects ---

  useEffect(() => {
    if (verifiedState === 'success') {
      setSignupStatus('success');
      setResendStatus('idle');
      setResendMessage('Email verified! You can now sign in.');
    } else if (verifiedState === 'error') {
      setResendMessage('The verification link is invalid or expired. Request a new one below.');
      setResendStatus('error');
    }
  }, [verifiedState]);

  useEffect(() => {
    if (user?.username) {
      setUsernameForm({ username: user.username });
    }
  }, [user?.username]);

  // --- Helpers ---

  const passwordChecklist = useMemo(
    () => [
      { label: '8+ chars', met: signupForm.password.length >= 8 },
      { label: 'Upper & Lower', met: /[A-Z]/.test(signupForm.password) && /[a-z]/.test(signupForm.password) },
      { label: 'Symbol', met: /[^A-Za-z0-9]/.test(signupForm.password) }
    ],
    [signupForm.password]
  );

  const handleSignupChange = (field: keyof SignupFormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({ ...prev, [field]: event.target.value }));
    setSignupErrors((prev) => ({ ...prev, [field]: undefined }));
    setSignupApiError(null);
  };

  const handleLoginChange = (field: keyof LoginFormState) => (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [field]: field === 'rememberMe' ? event.target.checked : event.target.value
    }));
    setLoginError(null);
  };

  const validateSignup = (): SignupFormErrors => {
    const errors: SignupFormErrors = {};
    const email = signupForm.email.trim();
    const confirmEmail = signupForm.confirmEmail.trim();
    const username = signupForm.username.trim();

    if (!email) errors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Invalid email address.';

    if (confirmEmail !== email) errors.confirmEmail = 'Emails do not match.';
    if (username && username.length < 2) errors.username = 'Username too short (min 2).';

    if (
      signupForm.password.length < 8 ||
      !/[A-Z]/.test(signupForm.password) ||
      !/[a-z]/.test(signupForm.password) ||
      !/[^A-Za-z0-9]/.test(signupForm.password)
    ) {
      errors.password = 'Does not meet requirements.';
    }

    if (signupForm.confirmPassword !== signupForm.password) errors.confirmPassword = 'Passwords do not match.';

    return errors;
  };

  // --- Handlers ---

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSignupStatus('submitting');
    setSignupApiError(null);
    const normalizedEmail = signupForm.email.trim();
    const validationErrors = validateSignup();

    if (Object.keys(validationErrors).length > 0) {
      setSignupErrors(validationErrors);
      setSignupStatus('idle');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalizedEmail,
          username: signupForm.username.trim(),
          password: signupForm.password,
          confirmPassword: signupForm.confirmPassword
        })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setSignupApiError(payload?.error ?? 'Unable to create account.');
        setSignupStatus('idle');
        return;
      }

      setSignupStatus('success');
      setResendStatus('idle');
      setResendMessage(null);
    } catch (error) {
      console.error(error);
      setSignupApiError('Network error. Please try again.');
      setSignupStatus('idle');
    }
  };

  const handleResendVerification = async () => {
    const normalizedEmail = signupForm.email.trim();
    if (!normalizedEmail) {
      setResendStatus('error');
      setResendMessage('Enter your email above first.');
      return;
    }

    setResendStatus('sending');
    setResendMessage(null);

    try {
      const response = await fetch('/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setResendStatus('error');
        setResendMessage(payload?.error ?? 'Failed to resend email.');
        return;
      }

      setResendStatus('sent');
      setResendMessage(payload?.message ?? 'New verification email sent.');
    } catch (error) {
      console.error(error);
      setResendStatus('error');
      setResendMessage('Network error.');
    }
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginStatus('submitting');
    setLoginError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        setLoginError(payload?.error ?? 'Invalid credentials.');
        setLoginStatus('idle');
        return;
      }

      setLoginStatus('success');
      setLoginForm(initialLogin);
      await refresh();
    } catch (error) {
      console.error(error);
      setLoginError('Network error. Please try again.');
      setLoginStatus('idle');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    logoutLocally();
    await refresh();
  };

  const handleChangeEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailStatus('submitting');
    setEmailError(null);
    setEmailMessage(null);

    try {
      const response = await fetch('/api/auth/change-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailForm)
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 401) await refresh();
        setEmailStatus('idle');
        setEmailError(payload?.error ?? 'Failed to update email.');
        return;
      }

      setEmailStatus('success');
      setEmailMessage(payload?.message ?? 'Email updated. Please verify.');
      setEmailForm({ newEmail: '', currentPassword: '' });
      await refresh();
    } catch (error) {
      console.error(error);
      setEmailStatus('idle');
      setEmailError('Network error.');
    }
  };

  const handleChangePassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordStatus('submitting');
    setPasswordError(null);
    setPasswordMessage(null);

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordStatus('idle');
      setPasswordError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordForm)
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 401) await refresh();
        setPasswordStatus('idle');
        setPasswordError(payload?.error ?? 'Failed to update password.');
        return;
      }

      setPasswordStatus('success');
      setPasswordMessage(payload?.message ?? 'Password updated.');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      console.error(error);
      setPasswordStatus('idle');
      setPasswordError('Network error.');
    }
  };

  const handleChangeUsername = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsernameStatus('submitting');
    setUsernameError(null);
    setUsernameMessage(null);

    if (!usernameForm.username.trim()) {
      setUsernameStatus('idle');
      setUsernameError('Username cannot be empty.');
      return;
    }

    try {
      const response = await fetch('/api/auth/change-username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: usernameForm.username.trim() })
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 401) await refresh();
        setUsernameStatus('idle');
        setUsernameError(payload?.error ?? 'Failed to update username.');
        return;
      }

      setUsernameStatus('success');
      setUsernameMessage(payload?.message ?? 'Username updated.');
      await refresh();
    } catch (error) {
      console.error(error);
      setUsernameStatus('idle');
      setUsernameError('Network error.');
    }
  };

  // --- Danger Zone Logic ---

  const performDeleteAccount = async () => {
    try {
      const response = await fetch('/api/auth/delete-account', { method: 'POST' });
      if (response.ok) {
        await logoutLocally();
        router.push('/');
        router.refresh();
      } else {
        alert('Failed to delete account.');
        setDeleteProgress(0);
        setIsDeleting(false);
      }
    } catch (error) {
      console.error(error);
      alert('Network error.');
      setDeleteProgress(0);
      setIsDeleting(false);
    }
  };

  const startDeleteTimer = () => {
    if (isDeleting) return;
    setIsDeleting(true);
    setDeleteProgress(0);
    startTimeRef.current = Date.now();
    const duration = 5000;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - (startTimeRef.current || now);
      const progress = Math.min((elapsed / duration) * 100, 100);
      setDeleteProgress(progress);

      if (progress < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        performDeleteAccount();
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  const cancelDeleteTimer = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsDeleting(false);
    setDeleteProgress(0);
    startTimeRef.current = null;
  };

  // --- Render ---

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-20">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Account & Settings
          </h1>
          <p className="text-[var(--muted-foreground)]">
            Manage your profile, security preferences, and sync status.
          </p>
        </div>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--accent)]"
        >
          <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Back to Game
        </Link>
      </div>

      {/* Notifications */}
      <AnimatePresence mode="popLayout">
        {verifiedState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              Email verified successfully! You can now log in.
            </div>
          </motion.div>
        )}
        {verifiedState === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-600 dark:text-rose-400"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Verification link invalid or expired.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {user ? (
          // Signed In Dashboard
          <>
            {/* Sidebar / Quick Info */}
            <div className="lg:col-span-4 space-y-6">
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--panel)] shadow-sm"
              >
                <div className="h-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                <div className="px-6 pb-6 -mt-10">
                  <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-[var(--panel)] bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold text-white shadow-md">
                    {user.username?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <h2 className="text-xl font-bold text-[var(--text)]">{user.username}</h2>
                  <p className="text-sm text-[var(--muted-foreground)] break-all">{user.email}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <button
                      onClick={handleLogout}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-4 py-2.5 text-sm font-semibold text-[var(--bg)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <LogOut className="h-4 w-4" />
                      Log out
                    </button>
                  </div>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-[var(--accent)] text-[var(--text)]">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text)]">Profile Settings</h3>
                    <p className="text-xs text-[var(--muted-foreground)]">Public visibility</p>
                  </div>
                </div>

                <form onSubmit={handleChangeUsername} className="space-y-4">
                  <InputField
                    id="update-username"
                    label="Username"
                    type="text"
                    value={usernameForm.username}
                    onChange={(e) => setUsernameForm({ username: e.target.value })}
                    required
                    helperText="Visible to other players."
                  />
                  {usernameMessage && <p className="text-sm font-medium text-emerald-500">{usernameMessage}</p>}
                  {usernameError && <p className="text-sm font-medium text-rose-500">{usernameError}</p>}

                  <button
                    type="submit"
                    disabled={usernameStatus === 'submitting'}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] transition-colors hover:bg-[var(--accent)] disabled:opacity-50"
                  >
                    {usernameStatus === 'submitting' ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : 'Update Username'}
                  </button>
                </form>
              </motion.section>
            </div>

            {/* Main Settings Area */}
            <div className="lg:col-span-8 space-y-6">
              {/* Security Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-[var(--accent)] text-[var(--text)]">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text)]">Security</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">Manage your credentials</p>
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Update Email */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Update Email</h4>
                    <form onSubmit={handleChangeEmail} className="space-y-4">
                      <InputField
                        id="new-email"
                        label="New Email"
                        type="email"
                        icon={Mail}
                        value={emailForm.newEmail}
                        onChange={(e) => setEmailForm(prev => ({ ...prev, newEmail: e.target.value }))}
                        required
                      />
                      <InputField
                        id="current-password-email"
                        label="Current Password"
                        type="password"
                        icon={Lock}
                        value={emailForm.currentPassword}
                        onChange={(e) => setEmailForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                        required
                      />
                      {emailMessage && <p className="text-sm font-medium text-emerald-500">{emailMessage}</p>}
                      {emailError && <p className="text-sm font-medium text-rose-500">{emailError}</p>}
                      <button
                        type="submit"
                        disabled={emailStatus === 'submitting'}
                        className="w-full rounded-xl bg-[var(--text)] px-4 py-2.5 text-sm font-semibold text-[var(--bg)] transition-transform hover:scale-[1.01] disabled:opacity-70"
                      >
                        {emailStatus === 'submitting' ? 'Updating...' : 'Update Email'}
                      </button>
                    </form>
                  </div>

                  {/* Change Password */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Change Password</h4>
                    <form onSubmit={handleChangePassword} className="space-y-4">
                      <InputField
                        id="current-pwd"
                        label="Current Password"
                        type="password"
                        icon={Lock}
                        value={passwordForm.currentPassword}
                        onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                        required
                      />
                      <InputField
                        id="new-pwd"
                        label="New Password"
                        type="password"
                        icon={Lock}
                        value={passwordForm.newPassword}
                        onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                        required
                      />
                      <InputField
                        id="confirm-pwd"
                        label="Confirm Password"
                        type="password"
                        icon={Lock}
                        value={passwordForm.confirmPassword}
                        onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        required
                      />
                      {passwordMessage && <p className="text-sm font-medium text-emerald-500">{passwordMessage}</p>}
                      {passwordError && <p className="text-sm font-medium text-rose-500">{passwordError}</p>}
                      <button
                        type="submit"
                        disabled={passwordStatus === 'submitting'}
                        className="w-full rounded-xl bg-[var(--text)] px-4 py-2.5 text-sm font-semibold text-[var(--bg)] transition-transform hover:scale-[1.01] disabled:opacity-70"
                      >
                        {passwordStatus === 'submitting' ? 'Updating...' : 'Set New Password'}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.section>

              {/* Danger Zone */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-rose-500/10 p-3 text-rose-500">
                    <ShieldAlert className="h-6 w-6" />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h3 className="text-lg font-bold text-rose-600 dark:text-rose-400">Danger Zone</h3>
                      <p className="text-sm text-rose-600/70 dark:text-rose-400/70">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                    </div>

                    <button
                      type="button"
                      onMouseDown={startDeleteTimer}
                      onMouseUp={cancelDeleteTimer}
                      onMouseLeave={cancelDeleteTimer}
                      onTouchStart={startDeleteTimer}
                      onTouchEnd={cancelDeleteTimer}
                      className="relative w-full overflow-hidden rounded-xl border border-rose-500/50 bg-rose-500/10 py-3 text-sm font-bold text-rose-600 transition-transform active:scale-[0.99] dark:text-rose-400 select-none"
                    >
                      <div
                        className="absolute inset-0 bg-rose-500/20 transition-all duration-75 ease-linear"
                        style={{ width: `${deleteProgress}%` }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isDeleting ? `Keep holding...` : 'Hold 5s to Delete Account'}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.section>
            </div>
          </>
        ) : (
          // Signed Out (Login/Register)
          <div className="lg:col-span-12 flex justify-center py-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md"
            >
              <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--panel)] shadow-2xl shadow-black/5 dark:shadow-black/20 backdrop-blur-xl">
                {/* Tabs */}
                <div className="flex border-b border-[var(--border)]">
                  <button
                    onClick={() => setAuthMode('login')}
                    className={cx(
                      "flex-1 py-4 text-sm font-semibold transition-colors relative",
                      authMode === 'login' ? "text-[var(--text)]" : "text-[var(--muted-foreground)] hover:text-[var(--text)]"
                    )}
                  >
                    Log In
                    {authMode === 'login' && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
                    )}
                  </button>
                  <button
                    onClick={() => setAuthMode('register')}
                    className={cx(
                      "flex-1 py-4 text-sm font-semibold transition-colors relative",
                      authMode === 'register' ? "text-[var(--text)]" : "text-[var(--muted-foreground)] hover:text-[var(--text)]"
                    )}
                  >
                    Create Account
                    {authMode === 'register' && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)]" />
                    )}
                  </button>
                </div>

                {/* Forms */}
                <div className="p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    {authMode === 'login' ? (
                      <motion.form
                        key="login"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                        onSubmit={handleLogin}
                      >
                        <div className="space-y-1 mb-6">
                          <h2 className="text-xl font-bold text-[var(--text)]">Welcome back</h2>
                          <p className="text-xs text-[var(--muted-foreground)]">Enter your credentials to continue.</p>
                        </div>

                        <InputField
                          id="identifier"
                          label="Email or Username"
                          type="text"
                          value={loginForm.identifier}
                          onChange={handleLoginChange('identifier')}
                          required
                          autoComplete="username"
                          icon={User}
                        />
                        <InputField
                          id="password"
                          label="Password"
                          type="password"
                          value={loginForm.password}
                          onChange={handleLoginChange('password')}
                          required
                          autoComplete="current-password"
                          icon={Lock}
                        />

                        <div className="flex items-center justify-between text-xs">
                          <label className="flex items-center gap-2 cursor-pointer text-[var(--muted-foreground)] hover:text-[var(--text)]">
                            <input
                              type="checkbox"
                              checked={loginForm.rememberMe}
                              onChange={(e) => setLoginForm(prev => ({ ...prev, rememberMe: e.target.checked }))}
                              className="rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
                            />
                            Remember me
                          </label>
                          <button type="button" className="text-[var(--primary)] hover:underline">Forgot password?</button>
                        </div>

                        {loginError && (
                          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-medium text-rose-600 dark:text-rose-400 flex items-center gap-2">
                            <AlertCircle className="h-3 w-3" />
                            {loginError}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={loginStatus === 'submitting'}
                          className="w-full rounded-xl bg-[var(--text)] py-3 text-sm font-bold text-[var(--bg)] shadow-lg shadow-[var(--text)]/20 transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] disabled:opacity-70"
                        >
                          {loginStatus === 'submitting' ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : 'Sign In'}
                        </button>
                      </motion.form>
                    ) : (
                      <motion.form
                        key="register"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                        onSubmit={handleRegister}
                      >
                        <div className="space-y-1 mb-6">
                          <h2 className="text-xl font-bold text-[var(--text)]">Join the community</h2>
                          <p className="text-xs text-[var(--muted-foreground)]">Create an account to track your progress.</p>
                        </div>

                        <InputField
                          id="signup-email"
                          label="Email"
                          type="email"
                          value={signupForm.email}
                          onChange={handleSignupChange('email')}
                          error={signupErrors.email}
                          required
                          autoComplete="email"
                          icon={Mail}
                        />
                        <InputField
                          id="signup-confirm-email"
                          label="Confirm Email"
                          type="email"
                          value={signupForm.confirmEmail}
                          onChange={handleSignupChange('confirmEmail')}
                          error={signupErrors.confirmEmail}
                          required
                          autoComplete="email"
                          icon={Mail}
                        />
                        <InputField
                          id="signup-username"
                          label="Username"
                          type="text"
                          value={signupForm.username}
                          onChange={handleSignupChange('username')}
                          error={signupErrors.username}
                          helperText="Leave blank for random."
                          icon={User}
                        />

                        <div className="grid grid-cols-2 gap-3">
                          <InputField
                            id="signup-password"
                            label="Password"
                            type="password"
                            value={signupForm.password}
                            onChange={handleSignupChange('password')}
                            error={signupErrors.password}
                            required
                            autoComplete="new-password"
                            icon={Lock}
                          />
                          <InputField
                            id="signup-confirm-password"
                            label="Confirm Pwd"
                            type="password"
                            value={signupForm.confirmPassword}
                            onChange={handleSignupChange('confirmPassword')}
                            error={signupErrors.confirmPassword}
                            required
                            autoComplete="new-password"
                            icon={Lock}
                          />
                        </div>

                        {/* Password Reqs */}
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--panel-soft)] p-3 space-y-2">
                          <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">Requirements</p>
                          <div className="grid grid-cols-2 gap-2">
                            {passwordChecklist.map((rule) => (
                              <div key={rule.label} className="flex items-center gap-1.5 text-xs">
                                {rule.met ? (
                                  <Check className="h-3 w-3 text-emerald-500" />
                                ) : (
                                  <div className="h-3 w-3 rounded-full border border-[var(--muted-foreground)]/30" />
                                )}
                                <span className={rule.met ? 'text-[var(--text)]' : 'text-[var(--muted-foreground)]'}>
                                  {rule.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {signupApiError && (
                          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-medium text-rose-600 dark:text-rose-400 flex items-center gap-2">
                            <AlertCircle className="h-3 w-3" />
                            {signupApiError}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={signupStatus === 'submitting'}
                          className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 text-sm font-bold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02] hover:shadow-purple-500/40 active:scale-[0.98] disabled:opacity-70"
                        >
                          {signupStatus === 'submitting' ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : 'Create Account'}
                        </button>

                        {signupStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-4 rounded-xl bg-emerald-500/10 p-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
                          >
                            Verification link sent! Check your inbox.
                            <button onClick={handleResendVerification} className="mt-2 block w-full text-xs underline opacity-80 hover:opacity-100">
                              Resend email
                            </button>
                            {resendMessage && <p className="mt-1 text-xs">{resendMessage}</p>}
                          </motion.div>
                        )}
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
