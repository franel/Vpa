import dynamic from 'next/dynamic';

const FullApp = dynamic(() => import('./FullAppBuilder'), { ssr: false });

export default function FullAppPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Full App Generator</h1>
      <FullApp />
    </main>
  );
}
