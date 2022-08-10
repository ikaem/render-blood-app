import { subscriptionJsonServerRepository } from './json-server/subscription.json-server.repository';
import {
  Subscription,
  SubscriptionCreateOneArgs,
  SubscriptionRepository,
} from './subscription.repository';

class SubscriptionRepositoryProvider implements SubscriptionRepository {
  private repository: SubscriptionRepository;

  constructor(repository: SubscriptionRepository) {
    this.repository = repository;
  }

  createOne = async (
    args: SubscriptionCreateOneArgs
  ): Promise<Subscription> => {
    const one = await this.repository.createOne(args);

    return one;
  };
}

export const subscriptionRepositoryProvider =
  new SubscriptionRepositoryProvider(subscriptionJsonServerRepository);
