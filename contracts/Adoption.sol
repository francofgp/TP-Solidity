// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract Adoption {
    address[16] public adopters;

    function adopt(uint256 petId) public returns (uint256) {
        require(petId >= 0 && petId <= 15);
        adopters[petId] = msg.sender;
        return petId;
    }

    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }

    function getAdopterOf(uint256 petId) public view returns (address) {
        return adopters[petId];
    }
}