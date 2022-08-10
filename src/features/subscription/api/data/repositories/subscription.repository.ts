// TODO move to some models
export type Subscription = {
  email: string;
  bloodGroup: string;
  city: string;
  created: string;
};

export type SubscriptionCreateOneArgs = {
  email: string;
  bloodGroup: string;
  city: string;
};

export abstract class SubscriptionRepository {
  abstract createOne(args: SubscriptionCreateOneArgs): Promise<Subscription>;
}
