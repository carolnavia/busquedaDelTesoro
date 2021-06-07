let numeroAleatorio = tamaño => {
    return Math.floor(Math.random()*tamaño)
}

let laDistancia = (e, objetivo) => {
    let diffx = e.offsetX - objetivo.x;
    let diffy = e.offsetY - objetivo.y;
 return Math.sqrt ((diffx * diffx) + (diffy * diffy))
}
 let laDistanciaCartel = dist => {
     if (dist < 30) {
         return "TE QUEMAS!!! ESTAS SUPER CERQUITA!!!!"
     }
     if ( dist < 50) {
         return "CALIENTE!!!!"
     }
     if (dist < 80) {
         return "TIBIOOOO"
     }
     if ( dist < 140) {
         return "FRIOOOO"
     }
     if ( dist < 200) {
         return "HELADOOOO"
     }
     if ( dist < 300) {
         return "FRIO, FRIO, FRIO COMO EL AGUA DEL RIO"
     }
     else {
         return "Estas hecho un pingüinooo"
     }
 }
