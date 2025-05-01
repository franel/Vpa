export type AppType = 'react' | 'electron' | 'react-native';

export type GeneratedApp = {
  type: AppType;
  name: string;
  structure: Record<string, string>;
};
