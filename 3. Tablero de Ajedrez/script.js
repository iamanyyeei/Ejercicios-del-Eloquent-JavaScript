let tamano = 8;

//Este ciclo crea las filas del tablero
for(fila = 0 ; fila < tamano; fila ++){

    let filaPantalla = "";

    //Este ciclo crea las columnas del tablero
    for(column = 0 ; column < tamano; column ++){

        //el condional le dice qué agregar en cada fila y columna
        if( (fila + column) % 2 === 0){
            filaPantalla += " ";
        } else {
            filaPantalla += "#";
        }
    }
    //imprime el resultado
    console.log(filaPantalla);
}
