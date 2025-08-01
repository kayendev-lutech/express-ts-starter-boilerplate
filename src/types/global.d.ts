import { logger as Logger } from '@logger/logger';

declare global {
  const logger: typeof Logger;
  namespace Express {
    interface Request {
      user?: { userId: string; username: string };
      deviceId?: string;
    }
  }
}
