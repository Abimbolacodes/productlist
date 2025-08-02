// src/screen/auth/login.page.tsx
'use client';
import { useState } from 'react';
import { sendLoginLink } from '@/src/service/auth.service';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendLoginLink(email);
    setStatus(res?.message || 'Check your email!');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <h1 className="text-xl font-bold">Login via Email</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Send Magic Link
        </button>
        <p>{status}</p>
      </form>
    </div>
  );
}
