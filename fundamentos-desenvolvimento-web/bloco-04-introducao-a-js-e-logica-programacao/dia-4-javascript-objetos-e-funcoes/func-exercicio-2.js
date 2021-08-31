array1 = [222, 3, 6, 7, 10, 1, 16, 7, 1];

function retornaMaiorIndex(array) {
    let maior = 0;
    let maiorIndice = 0;
        for (let index = 0; index < array.length; index++) {
            if(array[index] > maior) {
                maior = array[index];
                maiorIndice = index;
            } else {}
        }

    console.log(maiorIndice)
    }
retornaMaiorIndex(array1)