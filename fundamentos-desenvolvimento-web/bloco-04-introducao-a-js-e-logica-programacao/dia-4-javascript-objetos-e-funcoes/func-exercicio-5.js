array = [2, 3, 1, 1, 1, 5, 3];

function maisRepete (array) {
    maior = 0;
    for (let index = 0; index < array.length; index++) {
        contador=0;
        for (let index2 = 0 ; index2 < array.length; index2++) {
            if(array[index2] == array[index] ) {
            contador +=1;
            }
        }
        
        if ( contador > maior) {
            maior = contador;
            repete = array[index]
        }else{}
    }
    console.log(repete)
}

maisRepete(array)