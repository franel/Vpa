'use client';
import { useState } from 'react';
import { AppType } from './types';
import { generateApp } from './generator';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function FullAppBuilder() {
  const [appName, setAppName] = useState('');
  const [appType, setAppType] = useState<AppType>('react');

  const handleBuild = async () => {
    const app = generateApp(appType, appName || 'MyApp');
    const zip = new JSZip();

    Object.entries(app.structure).forEach(([file, content]) => {
      zip.file(file, content);
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, `${app.name}_${app.type}.zip`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Full App Builder</h2>
      <input
        className="border p-2 w-full"
        placeholder="App Name"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
      />
      <select className="border p-2 w-full" value={appType} onChange={(e) => setAppType(e.target.value as AppType)}>
        <option value="react">React</option>
        <option value="electron">Electron</option>
        <option value="react-native">React Native</option>
      </select>
      <button onClick={handleBuild} className="px-4 py-2 bg-green-600 text-white rounded">
        Generate ZIP
      </button>
    </div>
  );
}
