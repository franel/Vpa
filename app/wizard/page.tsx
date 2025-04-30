'use client';

import { useState } from 'react';

export default function WizardPage() {
  const [form, setForm] = useState({
    adminEmail: '',
    adminPassword: '',
    megaEmail: '',
    megaPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/mega', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="max-w-xl mx-auto mt-16 bg-gray-800 p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl mb-4 font-bold text-center">Setup Wizard</h1>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          className="w-full mb-3 p-2 rounded"
          placeholder={key}
          value={form[key as keyof typeof form]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button onClick={handleSubmit} className="w-full bg-green-600 p-2 rounded text-white">
        Generate & Save
      </button>
      {message && <p className="mt-4 text-sm text-green-400 text-center">{message}</p>}
    </div>
  );
}
