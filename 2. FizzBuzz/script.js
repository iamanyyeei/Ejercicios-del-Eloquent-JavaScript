for (i = 1; i <= 100 ; i++){

    if (i % 3 == 0 && i % 5 == 0){
        //numeros divisibles entre 3 y 5 a la vez
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        //numeros divisibles entre 3
        console.log("Fizz");

    } else if (i % 5 == 0){
        //numeros divisibles entre 5
        console.log("Buzz");
    } else {
        //numeros que no son divisibles ni por 3 ni 5
        console.log(i);
    }
}