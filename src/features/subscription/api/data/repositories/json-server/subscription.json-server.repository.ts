import { generateHttpRequestConfig } from '../../../../../../lib/axios/generate-http-request-config';
import { httpWrapper } from '../../../../../../lib/axios/http-wrapper';
import { SERVER_URL } from '../../../../../../lib/json-server/constants';
import {
  Subscription,
  SubscriptionCreateOneArgs,
  SubscriptionRepository,
} from '../subscription.repository';

class SubscriptionJsonServerRepository implements SubscriptionRepository {
  createOne = async ({
    email,
    bloodGroup,
    city,
  }: SubscriptionCreateOneArgs): Promise<Subscription> => {
    const url = `${SERVER_URL}/subscription`;
    const requestConfig = generateHttpRequestConfig({
      url,
      method: 'post',
      data: {
        email,
        bloodGroup,
        city,
      },
    });

    const response = await httpWrapper<Subscription>(requestConfig);

    return response.data;
  };
}

export const subscriptionJsonServerRepository =
  new SubscriptionJsonServerRepository();
