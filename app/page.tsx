'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
      <input
        className="w-full mb-2 p-2 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full mb-4 p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="w-full bg-blue-600 p-2 rounded text-white">
        Log In
      </button>
      {error && <p className="mt-2 text-red-400 text-sm text-center">{error}</p>}
    </div>
  );
}
