'use client';
import { useState } from 'react';
import { PrototypeScreen } from './types';
import { v4 as uuid } from 'uuid';

export default function PrototypeCanvas() {
  const [screens, setScreens] = useState<PrototypeScreen[]>([
    { id: uuid(), name: 'Home', components: [] },
  ]);

  const addScreen = () => {
    if (screens.length >= 5) return alert('Max 5 screens allowed');
    const newScreen: PrototypeScreen = {
      id: uuid(),
      name: `Screen ${screens.length + 1}`,
      components: [],
    };
    setScreens([...screens, newScreen]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Prototype Screens</h2>
      <button onClick={addScreen} className="mt-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Add Screen
      </button>
      <div className="grid grid-cols-2 gap-4">
        {screens.map((screen) => (
          <div key={screen.id} className="border rounded p-4 bg-white shadow">
            <h3 className="font-semibold">{screen.name}</h3>
            <div className="mt-2 text-gray-600">Drag & Drop UI builder (coming soon)</div>
          </div>
        ))}
      </div>
    </div>
  );
}
