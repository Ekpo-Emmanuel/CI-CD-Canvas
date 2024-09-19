'use client';
import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signInWithProvider } = useAuth();
  const [message, setMessage] = useState('');
  const router = useRouter();


  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'github') => {
    await signInWithProvider(provider);
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      required />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      required />
      <button type="submit">Sign In</button>
      <p>{message}</p>
      <div>
      <button onClick={() => handleSocialSignIn('google')}>Sign In with Google</button>
      <button onClick={() => handleSocialSignIn('github')}>Sign In with GitHub</button>
    </div>
    </form>
  );
};

export default SignIn;
