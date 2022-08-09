import { BloodSupply } from '../../models/bloor-supply';
import {
  BloodSuppliesRepository,
} from './blood-supplies.repository';
import { bloodSuppliesJsonServerRepository } from './repositories/json-server/blood-supplies.json-server-repository';

class BloodSuppliesRepositoryProvider implements BloodSuppliesRepository {
  private repository: BloodSuppliesRepository;

  constructor(repository: BloodSuppliesRepository) {
    this.repository = repository;
  }

  getAll = async (): Promise<BloodSupply[]> => {
    const all = await this.repository.getAll();

    return all;
  };
}

// we can now instantiate provider with any repository that we want that matches interface
export const bloodSuppliesRepositoryProvider = new BloodSuppliesRepositoryProvider(
  bloodSuppliesJsonServerRepository
);
