const fs = require("fs"); 
const tareas = JSON.parse(fs.readFileSync("./tp2-tareas/tareas.json", "utf-8"));
//const funcionesDeTareas = require("./funcionesDeTareas.js"); 
const process = require("process");
let accion = process.argv[2];
const {listadoTareas, agregarTarea, leerPorEstado} = require("./funcionesDeTareas.js");

switch(accion){
    case "filtrar":
        leerPorEstado(tareas, process.argv[3]);
        break
    case "crear":
        agregarTarea(process.argv[3],process.argv[4]);
        break;
    case "listar":
        listadoTareas(tareas);
        break;
    case undefined:
        console.log("---Atención - Tienes que pasar una acción.---");
        break;
    default:
        console.log("---No entiendo qué quieres hacer.---");
        break;
}
 