import nextConnect from 'next-connect';
import { errorHandler } from '../../api/middleware/handle-error';

export const routeHandler = nextConnect({
  onError: errorHandler,
});
