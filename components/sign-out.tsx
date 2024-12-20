'use client';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <button className="text-stone-500" onClick={() => signOut({ callbackUrl: '/' })}>
      Sign out
    </button>
  );
}
