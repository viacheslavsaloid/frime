import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { CryptoService } from 'src/shared/crypto/services';
import type { EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Connection } from 'typeorm';

import { UserEntity } from '../../users/entities';

@Injectable()
export class UserSubscriber implements EntitySubscriberInterface {
  constructor(
    @InjectConnection() readonly connection: Connection,
    private readonly _cryptoService: CryptoService,
  ) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return UserEntity;
  }

  async beforeInsert(event: InsertEvent<UserEntity>) {
    if (event.entity.password) {
      event.entity.password = await this._cryptoService.hash(
        event.entity.password,
      );
    }
  }
}
