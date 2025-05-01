'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/modules/thememanager/ThemeContext';
import ThemeSwitcher from '@/modules/thememanager/ThemeSwitcher';

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();
  const [envReady, setEnvReady] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if env file exists
  useEffect(() => {
    fetch('/api/check-env')
      .then((res) => res.json())
      .then((data) => {
        setEnvReady(data.envExists);
        if (!data.envExists) window.location.href = '/wizard';
      });
  }, []);

  const handleLogin = async () => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      setIsAuthenticated(true);
    } else {
      setError('Invalid credentials.');
    }
  };

  const links = [
    { href: '/flowchartbuilder', label: 'Flowchart Builder' },
    { href: '/prototypegenerator', label: 'Prototype Generator' },
    { href: '/fullappbuilder', label: 'Full App Builder' },
    { href: '/snapshotmanager', label: 'Snapshot Manager' },
    { href: '/auditlog', label: 'Audit Log' },
    { href: '/pluginloader', label: 'Plugin Loader' },
    { href: '/thememanager', label: 'Theme Manager' }
  ];

  if (!envReady) return <p className="p-4 text-gray-500">Checking setup...</p>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{theme.brand} Dashboard</h1>
        <ThemeSwitcher />
      </header>

      {!isAuthenticated ? (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-800 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
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
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 p-2 rounded text-white"
          >
            Log In
          </button>
          {error && <p className="mt-2 text-red-400 text-sm text-center">{error}</p>}
        </div>
      ) : (
        <>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <footer className="mt-10 text-sm text-center text-gray-400">
            Encrypted | Auto-Purging | Secure |{' '}
            <a href="/docs/User-Admin-Manual.pdf" className="underline">
              Download Manual
            </a>
          </footer>
        </>
      )}
    </div>
  );
}
