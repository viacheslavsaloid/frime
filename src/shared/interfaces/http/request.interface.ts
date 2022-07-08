import type { Request } from 'express';
import { IUser } from 'src/users';

export type IRequest = Request & {
  user: IUser;
};
