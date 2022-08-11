import { body } from 'express-validator';
import { subscribe } from '../../features/subscription/api/controllers/subscribe';
import { subscribeValidation } from '../../features/subscription/api/middleware/validators/subscribeValidation';
import { validateRequest } from '../../lib/express-validator/validate-request';
import { routeHandler } from '../../lib/next-connext/route-handler';

const route = routeHandler.use(...subscribeValidation).post(subscribe);
export default route;
