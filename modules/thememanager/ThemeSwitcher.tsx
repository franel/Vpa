'use client';
import { useTheme } from './ThemeContext';
import themes from './themes.json';

export default function ThemeSwitcher() {
  const { theme, switchTheme } = useTheme();

  return (
    <div className="space-y-2">
      <h2 className="font-semibold">Current Theme: {theme.name}</h2>
      {Object.entries(themes).map(([key, t]) => (
        <button
          key={key}
          onClick={() => switchTheme(key)}
          className="bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded"
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}
