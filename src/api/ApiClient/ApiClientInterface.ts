export interface ApiClientInterface {
  fetchApi(url: string, data: Record<string, unknown>): Promise<Record<string, unknown>>;
}