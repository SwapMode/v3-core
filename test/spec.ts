import { ethers } from 'hardhat'

describe('Name of the group', () => {
  it('', async () => {
    const Factory = await ethers.getContractFactory('Hasher')
    const factory = await Factory.deploy()
    await factory.deployed()

    console.log(await factory.INIT_CODE_PAIR_HASH())
  })
})
