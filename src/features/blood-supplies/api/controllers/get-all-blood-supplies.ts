import { NextApiHandler } from 'next';
import { httpWrapper } from '../../../../lib/axios/http-wrapper';
import { BloodSupply } from '../../models/bloor-supply';
import { bloodSupplyApiService } from '../api-services/blood-supply.api-service';
import { bloodSuppliesRepositoryProvider } from '../data/blood-supplies.repository-provider';

export const getAllBloodSupplies: NextApiHandler = async (_req, res) => {
  console.log('we are in');

  // res.status(200).json({ ok: true });

  // throw new Error('You are not authorized');

  // TODO this sould actually call the repository provider
  const bloodSupplies = await bloodSupplyApiService.getAllBloodSupplies();

  res.status(200).json({
    ok: true,
    value: bloodSupplies,
  });
};
