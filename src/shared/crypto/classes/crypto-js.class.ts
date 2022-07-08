import * as CryptoJS from 'crypto-js';

export class CryptoJs {
  constructor(private readonly _secret: string) {}

  encrypt(data: string) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this._secret).toString();
  }

  decrypt(data: string) {
    return JSON.parse(
      CryptoJS.AES.decrypt(data, this._secret).toString(CryptoJS.enc.Utf8),
    );
  }
}
