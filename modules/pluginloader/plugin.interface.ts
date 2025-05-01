import { ReactNode } from 'react';

export interface Plugin {
  id: string;
  name: string;
  init?: () => Promise<void>;
  renderUI: () => ReactNode;
  hooks?: {
    onSave?: () => void;
    onBuild?: () => void;
  };
}
