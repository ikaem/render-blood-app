import nextConnect from "next-connect";
import { handleError } from "../../api/middleware/handle-error";

export const routeHandler = nextConnect({
  onError: handleError
})