import { useRestRequest } from '../../../../hooks/use-rest-request';

import { BloodSupply } from '../../models/bloor-supply';
import { createGetAllBloodSuppliesRequestConfig } from './request-configs';

export const useBloodSupplyService = () => {
  const [
    isAllBloodSuppliesLoading,
    isAllBloodSuppliesError,
    allbloodSuppliesError,
    makeAllBloodSuppliesRequest,
  ] = useRestRequest<BloodSupply[]>();

  const handleGetAllBloodSupplies = async () => {
    let data: BloodSupply[] | null;

    const makeRequest = async () => {
      const requestConfig = createGetAllBloodSuppliesRequestConfig();
      const response = await makeAllBloodSuppliesRequest(requestConfig);

      data = response;
    };

    makeRequest();

    return {
      isLoading: isAllBloodSuppliesLoading,
      isError: isAllBloodSuppliesError,
      error: allbloodSuppliesError,
      data,
    };
  };

  return {
    handleGetAllBloodSupplies,
  };
};
