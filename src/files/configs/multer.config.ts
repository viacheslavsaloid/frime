import { diskStorage } from 'multer';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const MULTER_CONFIG = {
  storage: diskStorage({
    destination: join(__dirname, 'public'),
    filename: (reference, file, callback) =>
      callback(null, `${`${uuidv4()}_${file.originalname}`}`),
  }),
};
