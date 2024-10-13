import { IHeliusProvider } from './provider';

export class HeliusClient {
  constructor(private provider: IHeliusProvider) {}

  async getTxns(address: string): Promise<string[]> {
    return this.provider.getTxns(address);
  }
}
