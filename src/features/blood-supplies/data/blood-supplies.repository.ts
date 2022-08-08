// TODO move this to models
export interface BloodSupply {
  city: string;
  currentBloodLevel: number;
}

export abstract class BloodSuppliesRepository {
  abstract getAll(): Promise<BloodSupply[]>;
}
