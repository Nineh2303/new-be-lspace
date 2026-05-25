import * as CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.SECRET_KEY as string;

export function encryptPayload(data: any): string {
  if (data === undefined || data === null) return data;
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

export function decryptPayload(cipherText: string): any {
  if (!cipherText) return cipherText;
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);

    const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedStr) return null;
    return JSON.parse(decryptedStr);
  } catch (e) {
    console.error('Decryption failed', e);
    return null;
  }
}
