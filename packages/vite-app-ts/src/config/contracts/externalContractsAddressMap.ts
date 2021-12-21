import { TExternalContractAddressMap } from 'eth-hooks/models';

/**
 * The list of external contracts use by the app.
 * it is used to generate the type definitions for the external contracts by yarn build:contracts
 * provide the name and address of the external contract and the definition will be generated
 */
export const externalContractsAddressMap: TExternalContractAddressMap = {
  1: {
    DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
    UNI: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  },
};
