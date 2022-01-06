
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/argv')
require('colors');

console.clear()

//const base = 7
//console.log(process.argv)
//console.log(argv)
/* const [, , argv= '--base=5'] = process.argv
const [, base = 5] = argv.split('=') */
//console.log(base)
 crearArchivo(argv.b, argv.l, argv.h)
     .then(nombreArchivo =>console.log(nombreArchivo.rainbow, 'creado'))
     .catch(err => console.log(err))  
 