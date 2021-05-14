const fs = require("fs");
const leerJSON = JSON.parse(fs.readFileSync("./tp2-tareas/tareas.json", "utf-8"));
const funcionesDeTareas = {
    listadoTareas : function(lista = leerJSON){
        console.log("    ************************ ");
        console.log("      LISTADO DE TAREAS  ");
        return lista.forEach((tarea, i) =>{
            console.log(
                `Lista: ${1+i} - ${tarea.titulo} - ${tarea.estado}`);
        });
    },
    escribirJSON: function(tareas){
        fs.writeFileSync("./tp2-tareas/tareas.json" ,JSON.stringify(tareas, null,2), "utf-8");
    },
    agregarTarea: function(titulo, estado){
        let nuevaTarea = {
            titulo,
            estado
        }
        let tareas = leerJSON;
        tareas.push(nuevaTarea)
        funcionesDeTareas.escribirJSON(tareas);
        console.log(tareas);
    },
    leerPorEstado:function(lista, filtro){
        let listaTareaPorEstado = lista.filter(tarea => 
        filtro === tarea.estado);
        return funcionesDeTareas.listadoTareas(listaTareaPorEstado);
    
    }
}


module.exports = funcionesDeTareas; 