const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'El limite de donde tiene que llegar tu tabla',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número';
    }
    if (isNaN(argv.h)) {
      throw 'El limite tiene que ser un número';
    }
    return true;
  }).argv;

module.exports = argv;
