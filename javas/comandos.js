const WIDTH = 400;
const HEIGH = 400;

let objetivo = {
    x : numeroAleatorio (WIDTH),
    y : numeroAleatorio (HEIGH),
}
let $mapa =document.getElementById("mapa");
let $distancia =document.getElementById ("distancia");
let clicks= 0;

$mapa.addEventListener("click", function (e) {
    clicks ++;
    let dist = laDistancia (e , objetivo);
    let distCartel = laDistanciaCartel (dist)
    $distancia.innerHTML = `<h1>${distCartel}</h1>`;

    if (dist < 20) {
        alert (`HAS ENCONTRADO EL TESORO EN ${clicks} CLICKS`)
        location.reload ();
    }
})