export interface IHeliusProvider {
  getTxns(address: string): Promise<string[]>;
}

export class HeliusMainnetProvider implements IHeliusProvider {
  async getTxns(address: string): Promise<string[]> {
    return ['txn1', 'txn2'];
  }
}
