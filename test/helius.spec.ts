import { describe, expect, it } from 'vitest';
import { HeliusClient, IHeliusProvider } from '../src/helius';

class MockHeliusProvider implements IHeliusProvider {
  async getTxns(address: string): Promise<string[]> {
    return ['txn1', 'txn2'];
  }
}

describe('HeliusClient', () => {
  describe('getTxns()', () => {
    it('should return all the tx', async () => {
      // arrange
      const provider = new MockHeliusProvider();
      const address = 'FPb3LGSh6YrC6CwJRx39A83ydHaKKwpMDnm1kifoUn9d';
      const sut = new HeliusClient(provider);

      // act
      const actual = await sut.getTxns(address);

      // assert
      console.log(actual);
    });
  });
});
