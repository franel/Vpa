'use client';
import { usePluginManager } from './usePluginManager';

export default function PluginLoader() {
  const { plugins, activePlugins, togglePlugin } = usePluginManager();

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold">Plugins</h2>
      {plugins.map(plugin => (
        <div key={plugin.id} className="flex justify-between items-center">
          <span>{plugin.name}</span>
          <button
            onClick={() => togglePlugin(plugin.id)}
            className="text-sm text-blue-600 underline"
          >
            {activePlugins.includes(plugin.id) ? 'Deactivate' : 'Activate'}
          </button>
        </div>
      ))}
    </div>
  );
}
