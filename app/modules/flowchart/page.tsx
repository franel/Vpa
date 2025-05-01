'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const FlowCanvas = dynamic(() => import('./FlowCanvas'), { ssr: false });

export default function FlowchartPage() {
  useEffect(() => {
    document.title = 'Flowchart Builder';
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Flowchart Builder</h1>
      <FlowCanvas />
    </main>
  );
}
