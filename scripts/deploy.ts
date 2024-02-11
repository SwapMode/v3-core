import { ethers } from 'hardhat'
import { deployFactory } from './utils/contract.utils'

async function main() {
  const signer = (await ethers.getSigners())[0]
  await deployFactory('0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB', signer)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
