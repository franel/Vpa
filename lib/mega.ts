import { storage } from 'mega';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const MEGA_EMAIL = process.env.MEGA_EMAIL!;
const MEGA_PASSWORD = process.env.MEGA_PASSWORD!;
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!;

/**
 * Encrypts JSON content using AES-256.
 */
function encrypt(content: string): string {
  return AES.encrypt(content, ENCRYPTION_KEY).toString();
}

/**
 * Upload encrypted JSON to MEGA.nz in `/AppBuilder/AutoSaves/`.
 */
export async function saveToMega(filename: string, content: string) {
  const encrypted = encrypt(content);

  const mega = await new Promise<any>((resolve, reject) => {
    const storageInstance = storage({ email: MEGA_EMAIL, password: MEGA_PASSWORD }, (err) => {
      if (err) reject(err);
    });

    storageInstance.on('ready', () => resolve(storageInstance));
  });

  const root = mega.root;
  const folder = root.children.find((f: any) => f.name === 'AppBuilder');

  const targetFolder = folder
    ? folder
    : await new Promise((resolve) => mega.mkdir('AppBuilder', resolve));

  const autoSavesFolder = targetFolder.children.find((f: any) => f.name === 'AutoSaves')
    ? targetFolder.children.find((f: any) => f.name === 'AutoSaves')
    : await new Promise((resolve) => targetFolder.mkdir('AutoSaves', resolve));

  const up = autoSavesFolder.upload({ name: filename, size: encrypted.length }, () => {});
  up.end(encrypted);
}
