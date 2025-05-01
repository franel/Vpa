'use client';

import { useEffect } from 'react';
import { saveToMega } from '@/lib/mega'; // We'll define this lib later

export function useAutoSave({ nodes, edges }: any) {
  useEffect(() => {
    const interval = setInterval(() => {
      const payload = JSON.stringify({ nodes, edges });
      saveToMega(`flowchart-${Date.now()}.json`, payload);
    }, 5 * 60 * 1000); // 5 mins

    return () => clearInterval(interval);
  }, [nodes, edges]);
}
