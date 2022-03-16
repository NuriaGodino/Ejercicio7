function mediaParciales() {
    var notas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        notas[_i] = arguments[_i];
    }
    var i = 0;
    var sum = 0;
    while (i < notas.length) {
        sum = sum + notas[i++];
    }
    return sum / notas.length;
}
var parciales = mediaParciales(0, 0, 4);
function calificacion(notas, examenF, trabajo) {
    var calficacionF = 0;
    calficacionF = (notas * 0.55) + (examenF * 0.3) + (trabajo * 0.15);
    return calficacionF;
}
console.log(calificacion(parciales, 0, 4));
function aprobSus(notaF) {
    var mensaje = "";
    if (notaF >= 5) {
        mensaje = "Felicidades, está aprobado";
    }
    else {
        mensaje = "Lo siento, usted ha suspendido";
    }
    return mensaje;
}
console.log(aprobSus(calificacion(parciales, 7, 4)));
