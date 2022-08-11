import { bloodSuppliesJsonServerRepositoryProvider } from '../../../blood-supplies/api/data/blood-supplies.repository-provider';
import { subscriptionFirebaseRepository } from '../data/repositories/firebase/subscription.firebase.repository';
import {
  SubscriptionCreateOneArgs,
  SubscriptionRepository,
} from '../data/repositories/subscription.repository';
import {
  subscriptionFirebaseRepositoryProvider,
  subscriptionJsonServerRepositoryProvider,
} from '../data/repositories/subscription.repository-provider';

class SubscriptionApiService {
  constructor(private subscriptionRepositoryProvider: SubscriptionRepository) {}

  createSubscription = async (args: SubscriptionCreateOneArgs) => {
    console.log({ args });

    try {
      const data = await this.subscriptionRepositoryProvider.createOne(args);

      return {
        ok: true,
        value: data,
      };
    } catch (e) {
      // LOG ERRORS HERE
      // console.log(e);
      console.log(e.message);

      return {
        ok: false,
        value: null,
      };
    }
  };
}

export const subscriptionApiService = new SubscriptionApiService(
  // subscriptionJsonServerRepositoryProvider
  subscriptionFirebaseRepositoryProvider
);
