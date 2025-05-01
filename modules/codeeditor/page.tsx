'use client';
import dynamic from 'next/dynamic';

const LazyEditor = dynamic(() => import('./CodeEditor'), { ssr: false });

export default function CodeEditorPage() {
  return (
    <div className="h-screen">
      <LazyEditor />
    </div>
  );
}
