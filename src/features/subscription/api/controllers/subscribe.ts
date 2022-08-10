import { NextApiHandler, NextApiRequest } from 'next';
import { subscriptionApiService } from '../api-services/subscription.api-service';

export const subscribe: NextApiHandler = async (req: NextApiRequest, res) => {
  // TODO this needs to be validated and typed before it gets to the controller
  // use express validator for this
  const { email, city, bloodGroup } = req.body;

  const result = await subscriptionApiService.createSubscription({
    email,
    city,
    bloodGroup,
  });

  if (!result.ok) throw new Error('Again some custom error');

  res.status(200).json({
    result,
  });
};
