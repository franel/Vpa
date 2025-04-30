'use client';

import Link from 'next/link';

export default function DashboardPage() {
  const modules = [
    { name: 'Flowchart Builder', path: '/modules/flowchart' },
    { name: 'Prototype Generator', path: '/modules/prototype' },
    { name: 'Full App Builder', path: '/modules/fullapp' },
    { name: 'Snapshot Manager', path: '/modules/snapshot' },
    { name: 'Audit Log', path: '/modules/audit' },
    { name: 'Plugin Loader', path: '/modules/plugins' },
    { name: 'Theme Manager', path: '/modules/theme' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <Link key={mod.name} href={mod.path}>
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:bg-gray-700 transition-all">
              <h2 className="text-xl font-semibold">{mod.name}</h2>
              <p className="text-sm text-gray-400">Launch {mod.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
