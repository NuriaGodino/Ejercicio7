function mediaParciales(...notas:number[]):number{
    let i:number = 0
    let sum:number = 0
    while(i < notas.length){
        sum = sum + notas[i++]
    }

    return sum/notas.length
}

let parciales:number = mediaParciales(0, 0, 4)

function calificacion(notas, examenF:number, trabajo:number):number{
    let calficacionF:number = 0;
    calficacionF = (notas * 0.55) + (examenF * 0.3) + (trabajo * 0.15)
    return calficacionF
}

console.log(calificacion(parciales, 0, 4))

function aprobSus(notaF:number):string{
    let mensaje:string = ""
    if(notaF >= 5){
        mensaje = "Felicidades, está aprobado"
    }else{
        mensaje = "Lo siento, usted ha suspendido"
    }

    return mensaje
}

console.log(aprobSus(calificacion(parciales, 7, 4)))