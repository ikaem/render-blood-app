import { BloodSupply } from '../../models/bloor-supply';

export abstract class BloodSuppliesRepository {
  abstract getAll(): Promise<BloodSupply[]>;
}
