// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import './IFeeSharing.sol';

interface IProtocolToken {
    function feeShareContract() external view returns (IFeeSharing);

    function feeShareTokenId() external view returns (uint256);
}
