import { useState } from 'react';
import { Plugin } from './plugin.interface';

export function usePluginManager() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [activePlugins, setActivePlugins] = useState<string[]>([]);

  const registerPlugin = (plugin: Plugin) => {
    setPlugins(prev => [...prev, plugin]);
    if (plugin.init) plugin.init();
  };

  const togglePlugin = (id: string) => {
    setActivePlugins(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return { plugins, activePlugins, registerPlugin, togglePlugin };
}
