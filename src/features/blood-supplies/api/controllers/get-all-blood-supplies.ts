import { NextApiHandler } from 'next';
import { httpWrapper } from '../../../../lib/axios/http-wrapper';
import { BloodSupply } from '../../models/bloor-supply';
import { bloodSupplyApiService } from '../api-services/blood-supply.api-service';
import { bloodSuppliesJsonServerRepositoryProvider } from '../data/blood-supplies.repository-provider';

export const getAllBloodSupplies: NextApiHandler = async (_req, res) => {
  const result = await bloodSupplyApiService.getAllBloodSupplies();

  if (!result.ok) throw new Error('this would be some custom error');

  res.status(200).json({
    result,
  });
};
