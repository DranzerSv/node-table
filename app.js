const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');
console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');
//LA LIBRERIA ARGS ME PERMITE OBTENER LAS BANDERAS QUE EL USUARIO PASA A TRAVES DE LA LINEA
//DE COMANDOS EN FORMA DE OBJETOS, LO CUAL LO HACE MUCHO MAS FACIL YA QUE TIENE
//VARIOS CASOS CONTEMPLADO COMO POR EJEMPLO SI VIENE SEPARADO O EN FORMA
//DE ABREVIATURA, CLARO QUE SI ES EN FORMA DE ABREVIATURA HAY QUE HACER UNA CONFIGURACIÓN
//QUE SOLO FUE MENCIONADA BREVEMENTE EN EL CURSO

//const base = 41;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, 'creado'))
  .catch((err) => console.log(err));
