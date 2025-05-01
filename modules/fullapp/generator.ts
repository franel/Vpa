import { GeneratedApp, AppType } from './types';

export function generateApp(type: AppType, name: string): GeneratedApp {
  const base = {
    'README.md': `# ${name}\nGenerated ${type} project.`,
    'package.json': JSON.stringify({
      name: name.toLowerCase().replace(/\s/g, '-'),
      version: '1.0.0',
      scripts: { start: 'echo "start script goes here"' },
    }, null, 2),
    'src/index.js': '// Your app starts here\n',
  };

  const specifics: Record<AppType, Record<string, string>> = {
    react: {
      'src/App.js': 'function App() { return <h1>Hello React</h1>; } export default App;',
    },
    'react-native': {
      'src/App.js': `import { Text } from 'react-native'; export default function App() { return <Text>Hello RN</Text>; }`,
    },
    electron: {
      'main.js': `const { app, BrowserWindow } = require('electron'); app.whenReady().then(() => new BrowserWindow().loadURL('index.html'));`,
    },
  };

  return {
    type,
    name,
    structure: {
      ...base,
      ...specifics[type],
    },
  };
}
