'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useAutoSave } from './useAutoSave';

let id = 0;
const getId = () => `node_${id++}`;

export default function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [input, setInput] = useState('');

  useAutoSave({ nodes, edges });

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: getId(),
        data: { label: input || 'New Node' },
        position: { x: Math.random() * 250, y: Math.random() * 250 },
        type: 'default'
      }
    ]);
    setInput('');
  };

  return (
    <div className="h-[80vh] border border-gray-700 rounded-md">
      <div className="mb-2 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-800 p-2 rounded text-white"
          placeholder="Type node text"
        />
        <button onClick={addNode} className="bg-blue-600 px-4 py-2 rounded">
          Add Node
        </button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
