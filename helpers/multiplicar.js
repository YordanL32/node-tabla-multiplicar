const fs = require('fs')
const colors = require('colors');
const crearArchivo = async(base = 5, listar=false, hasta) => {

    try {
        console.clear()
     
        let salida = ''
        let consola = ''
        for (let i = 1; i <= hasta; i++) {
            salida += `${base}x${i}=${base * i}\n`
            consola += `${base} ${'x'.green} ${i} = ${base * i}\n`
        }
        if(listar){
        console.log('================='.green)
        console.log(`===Tabla del ${colors.blue(base)}===`)
        console.log('================='.green)
        console.log(consola)
        }
        
        fs.writeFileSync(`./salida/tabal-${base}.txt`, salida)
        let nombreArchivo = `tabal-${base}.txt`  
        return nombreArchivo
    } catch (error) {
        throw error
    }
   
}
module.exports = {
    crearArchivo
}