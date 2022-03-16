let juegos:string[] = ["Assassins Creed", "Watch Dogs", "Mario", "Spiderman", "Animal Crossing"]

function eliminaJuego(mario:string[]):string[]{
    mario = mario.filter(e => e !== 'Mario')
    return mario
}

console.log(eliminaJuego(juegos))