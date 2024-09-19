'use client';
import { useAuth } from '@/context/AuthContext';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, signInWithProvider } = useAuth();
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error: any) {
      alert(error.message);
    }
  };
  

  const handleSocialSignIn = async (provider: 'google' | 'github') => {
    await signInWithProvider(provider);
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
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
      <button type="submit">Sign Up</button>
      <p>{message}</p>
      <div>
      <button onClick={() => handleSocialSignIn('google')}>Sign In with Google</button>
      <button onClick={() => handleSocialSignIn('github')}>Sign In with GitHub</button>
    </div>
    </form>
  );
};

export default SignUp;
