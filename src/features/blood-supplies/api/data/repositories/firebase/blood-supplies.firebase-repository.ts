import { firebaseAdmin } from '../../../../../../lib/firebase/initialize';
import { BloodSupply } from '../../../../models/bloor-supply';
import { BloodSuppliesRepository } from '../../blood-supplies.repository';

class BloodSuppliesFirebaseRepository implements BloodSuppliesRepository {
  getAll = async (): Promise<BloodSupply[]> => {
    const entries = await firebaseAdmin.db.collection('blood-supplies').get();
    const entriesData = entries.docs.map<BloodSupply>((entry) => {
      const data = entry.data();

      const bloodSupply: BloodSupply = {
        city: data.city,
        bloodLevels: data.bloodLevels,
      };

      return bloodSupply;
    });

    // TODO just test for now
    // const response = await firebaseAdmin.db.collection('subscriptions').add({
      // email: 'karlo',
      // bloodGroup: 'A+',
      // city: 'Test city ',
    //   created: new Date().toISOString(),
    // });

    // console.log({ response });

    // const data = await response.get();

    // const actualData = data.data();

    // console.log({ data, actualData });

    return entriesData;
  };
}

export const bloodSuppliesFirebaseRepository =
  new BloodSuppliesFirebaseRepository();

// TODO this moves to utils
// TODO this hsould tranform firebase doc to blood supply
