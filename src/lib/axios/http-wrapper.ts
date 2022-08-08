import axios, {
  AxiosResponse,
  AxiosRequestHeaders,
  AxiosRequestConfig,
  Method,
} from 'axios';
import { generateGetAllRequestConfig } from '../../features/blood-supplies/data/repositories/json-server/request-generators';
import { generateHttpRequestConfig } from './generate-http-request-config';

const DATA_METHODS = ['POST', 'PUT', 'PATCH'];

export const httpWrapper = async <T>(
  requestConfig: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  const response = (await axios(requestConfig)) as AxiosResponse<T>;

  return response;

  // const { url, params, data, method } = requestConfig;

  // const normalizedMethod = method.toUpperCase();

  // const contentType: AxiosRequestHeaders =
  //   normalizedMethod === 'POST'
  //     ? {
  //         'Content-Type': 'application/json',
  //       }
  //     : {};

  // const headers = {
  //   ...contentType,
  // };

  // const config: AxiosRequestConfig = {
  //   headers,
  //   params: params ?? {},
  // };

  // const requestArgs = [config];

  // if (DATA_METHODS.includes(normalizedMethod)) requestArgs.splice(0, 0, data);

  // const call = axios["get"];
  // const call2 = axios["post"];

  // const response = await axios[getAxiosMethod(normalizedMethod)]<T>(url, ...requestArgs);

  // return response;
};

// function getAxiosMethod(restMethod: string) {
//   if (restMethod === 'POST') return 'post';
//   if (restMethod === 'PUT') return 'put';
//   if (restMethod === 'PATCH') return 'patch';
//   if (restMethod === 'DELETE') return 'delete';
//   return 'get';
// }

const testConfig = generateHttpRequestConfig({
  url: 'test',
  method: 'get',
});

const response = httpWrapper<{
  person: {
    name: string;
    age: number;
  } | null
}>(testConfig).then((response) => console.log({ data: response.data.person.age }));
