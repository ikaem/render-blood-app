import { BloodSuppliesRepository, BloodSupply } from "./blood-supplies.repository";

class BloodSuppliesRepositoryProvider implements BloodSuppliesRepository {

  private repository: BloodSuppliesRepository;

  constructor(repository: BloodSuppliesRepository) {
    this.repository = repository;
  }


  getAll = async (): Promise<BloodSupply[]> => {
    const all = await this.repository.getAll();

    return all;
  }


}