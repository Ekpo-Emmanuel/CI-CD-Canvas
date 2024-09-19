'use client'
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace('/sign-in');
    }
  }, [user, router]);

  if (user === null) {
    return <>Loading ...</>
  }

  return <>{children}</>;
};

export default ProtectedRoute;
