'use client';
import { useState } from 'react';
import { SnapshotManager } from './SnapshotManager';

export default function SnapshotTester() {
  const [manager] = useState(() => new SnapshotManager({ count: 0 }));
  const [value, setValue] = useState(manager.current());

  const update = (delta: number) => {
    const updated = { ...value, count: value.count + delta };
    manager.add(updated);
    setValue(updated);
  };

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">Snapshot Demo</h1>
      <div className="text-lg">Count: {value.count}</div>
      <div className="space-x-2">
        <button onClick={() => update(1)} className="btn">+</button>
        <button onClick={() => update(-1)} className="btn">-</button>
        <button onClick={() => setValue(manager.undo() || value)} className="btn">Undo</button>
        <button onClick={() => setValue(manager.redo() || value)} className="btn">Redo</button>
      </div>
    </div>
  );
}
