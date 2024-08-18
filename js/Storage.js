const DERECK_CARRANZA = `lista_tareas`;

function SaveAsignaciones(asignaciones) {
    localStorage.setItem(DERECK_CARRANZA, JSON.stringify(asignaciones)); //Esta convierte el JSON a texto para que el navegador pueda recononcerlo

}

function GuardarAsignaciones(asignaciones) {

    return JSON.parse(localStorage.getItem(DERECK_CARRANZA)) || []; // Este retorna una lista vacia
}

export {DERECK_CARRANZA, SaveAsignaciones, GuardarAsignaciones};
