array1 = [30, 4, 0, 7, 10, 19, 16, 7, 1];

function retornaMenorIndex(array) {
    let maior = 0;
    let menor = 0;

            for (let index = 0; index < array.length; index++) {
            if(array[index] > maior) {
            maior = array[index];}}

            menor = maior;

            for (let index = 0; index < array.length; index++) {
            if(array[index] < menor) {
                menor = array[index];
                menorIndice = index;
            } else {}
        }

    console.log(menorIndice)
    }
retornaMenorIndex(array1)