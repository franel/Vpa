import { useState } from 'react';

export function useEditor() {
  const [code, setCode] = useState('// Start typing TypeScript code');

  const handleChange = (value?: string) => {
    setCode(value || '');
  };

  return { code, handleChange };
}
