var juego = [
    {
        name: 'Assassins Creed'
    },
    {
        name: 'Watch Dogs'
    },
    {
        name: 'Mario'
    },
    {
        name: 'Spiderman'
    },
    {
        name: 'Animal Crossing'
    }
];
var juegos = ["Assassins Creed", "Watch Dogs", "Mario", "Spiderman", "Animal Crossing"];
function eliminaJuego(mario) {
    mario = mario.filter(function (e) { return e !== 'Mario'; });
    return mario;
}
console.log(eliminaJuego(juegos));
