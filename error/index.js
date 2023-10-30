const fs = require('fs');
const path = require('path');

const errorClasses = {};

const errorFiles = fs.readdirSync(__dirname).filter((file) => path.extname(file) === '.js' && file !== 'index.js');

errorFiles.forEach((file) => {
  const errorDefinition = require(`./${file}`);

  Object.keys(errorDefinition).forEach((errorKey) => {
    errorClasses[errorKey] = class extends Error {
      constructor(message) {
        const definition = errorDefinition[errorKey];
        super(definition.message);
        this.message = message ? message : definition.message;
        this.status = definition.status;
        this.code = definition.code;
        this.name = errorKey
      }
    };
  });
});

module.exports = errorClasses;
