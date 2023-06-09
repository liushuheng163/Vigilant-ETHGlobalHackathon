pragma solidity >=0.8.0;


library LibGame {

    function addressToEntityKey(address addr)internal pure returns (bytes32) {
        return bytes32(uint256(uint160(addr)));
    }

    function positionToEntityKey(int256 x, int256 y)internal pure returns (bytes32) {
        return keccak256(abi.encode(x, y));
    }
    function nftEntityKey(bytes32 entity, bytes32 key)internal pure returns (bytes32) {
        return keccak256(abi.encode(entity, key));
    }
    function byte32ToString(bytes32 b)internal pure returns (string memory ) {
        bytes memory names = new bytes(b.length);
        for(uint i = 0; i < b.length; i++) {
            names[i] = b[i];
        }
        return string(names);
    }
}
 