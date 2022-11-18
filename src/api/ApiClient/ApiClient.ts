import { ApiClientInterface } from './ApiClientInterface';

export class ApiClient implements ApiClientInterface {
  fetchApi(url: string, data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return fetch(url, data)
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
  }
}