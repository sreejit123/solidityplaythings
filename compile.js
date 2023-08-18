const path = require('path');
const fs = require('fs');
const solc = require('solc');

function compile(contractName) {
    const sourcepath = path.resolve(__dirname, 'contracts', contractName + '.sol');
    const source = fs.readFileSync(sourcepath, 'utf8');

    const input = {
        language: 'Solidity',
        sources: {},
        settings: {
            outputSelection: {
                '*': {
                    '*': ['*'],
                },
            },
        },
    };

    input.sources[contractName] = {
        content: source
    }
    const compiledObject = JSON.parse(solc.compile(JSON.stringify(input)));
    const obj = compiledObject.contracts[contractName];
    console.log(obj);
    return obj[contractName];
}

module.exports = {compile};



