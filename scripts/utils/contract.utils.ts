import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { ethers } from 'hardhat'

export async function deployFactory(protocolToken: string, signer: SignerWithAddress) {
  const UniswapV3Factory = await ethers.getContractFactory('UniswapV3Factory', signer)
  const factory = await UniswapV3Factory.deploy(protocolToken)
  await factory.deployed()
  console.log(`UniswapV3Factory deployed at: ${factory.address}`)

  return factory
}
