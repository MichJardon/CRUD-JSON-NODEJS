const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripción de la tare por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    description: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('Crear', 'Crear el elemento por hacer', {
        descripcion
    })
    .command('Actualizar', 'Actualiza el elemento de una tarea', {
        descripcion,
        completado
    })
    .command('Borrar', 'Borra un elemento', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}