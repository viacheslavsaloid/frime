import { Module } from '@nestjs/common';

import { CRYPTO_SERVICES } from './services';

@Module({
  providers: CRYPTO_SERVICES,
  exports: CRYPTO_SERVICES,
})
export class CryptoModule {}
