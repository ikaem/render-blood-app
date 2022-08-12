import { BloodSuppliesRepository } from '../data/blood-supplies.repository';
import {
  bloodSuppliesFirebaseRepositoryProvider,
  bloodSuppliesJsonServerRepositoryProvider,
} from '../data/blood-supplies.repository-provider';
import { bloodSuppliesFirebaseRepository } from '../data/repositories/firebase/blood-supplies.firebase-repository';

class BloodSupplyApiService {
  constructor(
    private bloodSuppliesRepositoryProvider: BloodSuppliesRepository
  ) {}

  getAllBloodSupplies = async () => {
    try {
      const data = await this.bloodSuppliesRepositoryProvider.getAll();

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
        value: [],
      };
    }
  };
}

export const bloodSupplyApiService = new BloodSupplyApiService(
  // bloodSuppliesJsonServerRepositoryProvider
  bloodSuppliesFirebaseRepositoryProvider
);