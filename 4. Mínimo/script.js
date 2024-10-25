//Forma NRO 1 de hacer este ejercicio
function minimo (nro1,nro2) {
    Math.min(nro1,nro2);
    return console.log(Math.min(nro1,nro2));
}

minimo(-12,7);
minimo(1000,-300);
minimo(-3,-4);
minimo(-12,0);

//Forma NRO 2 de hacer este ejercicio
function minimo2 (nro1,nro2) {
    if( nro1 < nro2){
        return nro1;
    }else{
        return nro2;
    }
}

console.log(minimo2(0,7));
console.log(minimo2(1000,300));
console.log(minimo2(4,8));
console.log(minimo2(89,74));