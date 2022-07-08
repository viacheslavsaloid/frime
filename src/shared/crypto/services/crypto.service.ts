import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { CryptoJs } from '../classes';

@Injectable()
export class CryptoService {
  private readonly _crypto = new CryptoJs('frime');

  getBase64(data: any) {
    return Buffer.from(JSON.stringify(data)).toString('base64');
  }

  getSha1(data: any) {
    return crypto.createHash('sha1').update(data).digest('base64');
  }

  getHMAC_MD5(data: any, secret: string) {
    return crypto.createHmac('md5', secret).update(data).digest('hex');
  }

  getUtf8(data: string) {
    return Buffer.from(data, 'utf-8').toString();
  }

  encrypt(data: string) {
    return this._crypto.encrypt(data);
  }

  decrypt(data: string) {
    return this._crypto.decrypt(data);
  }

  async hash(data: string) {
    return bcrypt.hash(data, 10);
  }

  async compare(data: string, dataToCompare: string) {
    return bcrypt.compare(data, dataToCompare || '');
  }
}
