n = 5;

function somatorio(numero) {
    let result = 0;
    for (let index = 0; index <= numero; index++) {
        result = result+index;      
    }
    console.log(result);
}

somatorio(n)