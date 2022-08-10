import { NextApiHandler } from 'next';
import { httpWrapper } from '../../../../lib/axios/http-wrapper';
import { BloodSupply } from '../../models/bloor-supply';
import { bloodSupplyApiService } from '../api-services/blood-supply.api-service';
import { bloodSuppliesRepositoryProvider } from '../data/blood-supplies.repository-provider';

export const getAllBloodSupplies: NextApiHandler = async (_req, res) => {
  const response = await bloodSupplyApiService.getAllBloodSupplies();

  if (!response.ok) throw new Error('this would be some custom error');

  res.status(200).json({
    response,
  });
};
