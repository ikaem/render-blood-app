import { getAllBloodSupplies } from '../../features/blood-supplies/api/controllers/get-all-blood-supplies';
import { routeHandler } from '../../lib/next-connext/route-handler';

const route = routeHandler.get(getAllBloodSupplies);
export default route;
