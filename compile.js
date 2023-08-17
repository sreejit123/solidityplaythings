const path = require('path');
const fs = require('fs');
const solc = require('solc');

function compile(contractName) {
    const personPath = path.resolve(__dirname, 'contracts', contractName + '.sol');
    const personSource = fs.readFileSync(personPath, 'utf8');

    return solc.compile(personSource, 1).contracts[':' + contractName];
}

module.exports = {compile};



