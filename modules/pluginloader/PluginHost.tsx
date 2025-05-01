'use client';
import { usePluginManager } from './usePluginManager';

export default function PluginHost() {
  const { plugins, activePlugins } = usePluginManager();

  return (
    <div className="plugin-host">
      {plugins
        .filter(p => activePlugins.includes(p.id))
        .map(p => (
          <div key={p.id}>{p.renderUI()}</div>
        ))}
    </div>
  );
}
