const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por_hacer/por_hacer');

let comando = argv._[0];

switch (comando) {
    case 'Crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'Listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('=========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('==========================='.green);
        }
        break;

    case 'Actualizar':
        console.log(argv.descripcion, '  ', argv.completado);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'Borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No encontrado el comando');
        break;
}