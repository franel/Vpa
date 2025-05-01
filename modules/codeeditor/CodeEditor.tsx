'use client';

import Editor from '@monaco-editor/react';
import { useEditor } from './useEditor';

export default function CodeEditor() {
  const { code, handleChange } = useEditor();

  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        defaultLanguage="typescript"
        value={code}
        onChange={handleChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: 'on',
        }}
      />
    </div>
  );
}
