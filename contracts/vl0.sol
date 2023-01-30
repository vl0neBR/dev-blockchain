// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract vl0 {
    string public message = 'Ola Mundo';
    

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}