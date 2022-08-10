import { subscribe } from '../../features/subscription/api/controllers/subscribe';
import { validateSubscribeRequest } from '../../features/subscription/api/middleware/validators/validate-subscribe-request';
import { routeHandler } from '../../lib/next-connext/route-handler';

const route = routeHandler.use(validateSubscribeRequest).get(subscribe);
export default route;
