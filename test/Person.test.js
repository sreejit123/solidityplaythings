const ganache = require('ganache');
const { Web3 } = require('web3');
const { compile } = require('../compile')
const assert = require('assert');

const web3 = new Web3(ganache.provider());

let person, accounts;

before(async () => {
    accounts = await web3.eth.getAccounts();
    const personContract = compile('Person');
    person = await new web3.eth.Contract(personContract.abi)
    .deploy({data: personContract.evm.bytecode.object, arguments: ["Alice"]})
    .send({from: accounts[0], gas: "500000"});
});

describe('Testing out the person contract', () => {
    it('shows default name', async () => {
        const defaultName = await person.methods.getName().call();
        assert.equal(defaultName, "Alice");
    });

    it('updates given name', async () => {
        await person.methods.setName("Bob").send({from: accounts[0], gas: "100000"});
        const updatedName = await person.methods.getName().call();
        assert.equal(updatedName, "Bob");
    })
});
