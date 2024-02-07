import { ethers } from 'hardhat'
import { deployFactory } from './utils/contract.utils'

async function main() {
  const signer = (await ethers.getSigners())[0]
  await deployFactory(signer)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
