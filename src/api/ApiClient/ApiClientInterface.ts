export interface ApiClientInterface {
  fetchApi(url: string, data: Record<string, never>): Promise<string>;
}