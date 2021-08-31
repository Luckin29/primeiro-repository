array1 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 


function retornaMaior(array) {
    maior = 0;
    maiorNome='';
    for (let index = 0; index < array.length; index++) {
        if (array[index].length > maior) {
            maior = array[index].length
            maiorNome = array[index];
        }else{}  
    }
    console.log(maiorNome)

}

retornaMaior(array1);