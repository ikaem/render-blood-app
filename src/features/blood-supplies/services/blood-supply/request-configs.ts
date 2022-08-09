import { generateHttpRequestConfig } from '../../../../lib/axios/generate-http-request-config';
import { envVars } from '../../../../utils/config/env-vars';

export const createGetAllBloodSuppliesRequestConfig = () => {
  const config = generateHttpRequestConfig({
    url: `${envVars.API_URL}/blood-supplies`,
    method: 'get',
  });

  return config;
};
