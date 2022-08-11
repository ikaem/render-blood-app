import { firebaseAdmin } from '../../../../../../lib/firebase/initialize';
import {
  Subscription,
  SubscriptionCreateOneArgs,
  SubscriptionRepository,
} from '../subscription.repository';

class SubscriptionFirebaseRepository implements SubscriptionRepository {
  createOne = async ({
    email,
    bloodGroup,
    city,
  }: SubscriptionCreateOneArgs): Promise<Subscription> => {
    // TODO these should be constants, names of subscriptions
    // TODO should probably make a wrapper for adding stuff to collection

    console.log({
      email,
      bloodGroup,
      city,
    });

    const response = await firebaseAdmin.db.collection('subscriptions').add({
      email,
      bloodGroup,
      city,
      created: new Date().toISOString(),
    });

    // TODO also make some wrapper, or some converted to subscriptiuon from firebase data
    const subscriptionSnapshot = await response.get();
    const subscriptionDocument = subscriptionSnapshot.data();
    const subscription: Subscription = {
      bloodGroup: subscriptionDocument.bloodGroup,
      city: subscriptionDocument.city,
      email: subscriptionDocument.email,
      created: subscriptionDocument.created,
    };

    return subscription;
  };
}

export const subscriptionFirebaseRepository =
  new SubscriptionFirebaseRepository();
