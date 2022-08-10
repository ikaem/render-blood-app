import { generateHttpRequestConfig } from '../../../../../../lib/axios/generate-http-request-config';
import { httpWrapper } from '../../../../../../lib/axios/http-wrapper';
import { SERVER_URL } from '../../../../../../lib/json-server/constants';
import { BloodSupply } from '../../../../models/bloor-supply';
import { BloodSuppliesRepository } from '../../blood-supplies.repository';

class BloodSuppliesJsonServerRepository implements BloodSuppliesRepository {
  getAll = async (): Promise<BloodSupply[]> => {
    const url = `${SERVER_URL}/blood-supplies`;
    const requestConfig = generateHttpRequestConfig({
      url,
      method: 'get',
    });

    const response = await httpWrapper<BloodSupply[]>(requestConfig);

    return response.data;
  };
}

export const bloodSuppliesJsonServerRepository =
  new BloodSuppliesJsonServerRepository();
