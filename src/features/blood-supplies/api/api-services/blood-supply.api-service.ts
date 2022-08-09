import { BloodSuppliesRepository } from '../data/blood-supplies.repository';
import { bloodSuppliesRepositoryProvider } from '../data/blood-supplies.repository-provider';

class BloodSupplyApiService {
  constructor(
    private bloodSuppliesRepositoryProvider: BloodSuppliesRepository
  ) {}

  getAllBloodSupplies = async () => {
    return await this.bloodSuppliesRepositoryProvider.getAll();
  };
}

export const bloodSupplyApiService = new BloodSupplyApiService(
  bloodSuppliesRepositoryProvider
);
