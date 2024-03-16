import { ethers } from 'hardhat'
import { deployFactory } from './utils/contract.utils'

async function main() {
  const signer = (await ethers.getSigners())[0]
  await deployFactory('0xB687282AD4Fb8897D5Cd41f3C1A54DeB4cc88625', signer)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
