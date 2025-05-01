import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('./PrototypeCanvas'), { ssr: false });

export default function PrototypePage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Prototype Generator</h1>
      <Canvas />
    </main>
  );
}
