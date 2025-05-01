import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { PrototypeScreen } from './types';

export async function exportPrototype(screens: PrototypeScreen[]) {
  const zip = new JSZip();

  screens.forEach((screen, index) => {
    const fileContent = JSON.stringify(screen, null, 2);
    zip.file(`Screen${index + 1}.json`, fileContent);
  });

  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, `Prototype_${Date.now()}.zip`);
}
