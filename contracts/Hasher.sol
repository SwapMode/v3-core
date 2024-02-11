// SPDX-License-Identifier: BUSL-1.1
pragma solidity =0.7.6;

import './UniswapV3Pool.sol';

contract Hasher {
    bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV3Pool).creationCode));
}
