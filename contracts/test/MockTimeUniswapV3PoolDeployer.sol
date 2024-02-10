// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../interfaces/IUniswapV3PoolDeployer.sol';
import '../interfaces/IProtocolToken.sol';

import './MockTimeUniswapV3Pool.sol';

contract MockTimeUniswapV3PoolDeployer is IUniswapV3PoolDeployer {
    IProtocolToken public immutable protocolToken;

    struct Parameters {
        address factory;
        address token0;
        address token1;
        IProtocolToken protocolToken;
        uint24 fee;
        int24 tickSpacing;
    }

    Parameters public override parameters;

    event PoolDeployed(address pool);

    constructor(IProtocolToken _protocolToken) {
        protocolToken = _protocolToken;
    }

    function deploy(
        address factory,
        address token0,
        address token1,
        uint24 fee,
        int24 tickSpacing
    ) external returns (address pool) {
        parameters = Parameters({
            factory: factory,
            token0: token0,
            token1: token1,
            fee: fee,
            tickSpacing: tickSpacing,
            protocolToken: protocolToken
        });
        pool = address(
            new MockTimeUniswapV3Pool{salt: keccak256(abi.encodePacked(token0, token1, fee, tickSpacing))}()
        );
        emit PoolDeployed(pool);
        delete parameters;
    }
}
