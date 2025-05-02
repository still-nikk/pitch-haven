'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Login to Pitch Haven</h1>
      <button
        onClick={() => signIn('github')}
        className="px-6 py-2 bg-black text-white rounded hover:opacity-80 transition"
      >
        Login with GitHub
      </button>
      <button
        onClick={() => signIn('google')}
        className="px-6 py-2 bg-red-500 text-white rounded hover:opacity-80 transition"
      >
        Login with Google
      </button>
    </main>
  );
}
