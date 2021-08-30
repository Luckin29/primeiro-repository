let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let nImpar = 0;
for(let i=0; i<numbers.length;i+=1 ) {
    if ((numbers[i]%2) > 0 ){
        nImpar += 1;   
    } else {
        }

} 
    if(nImpar > 0) {
        console.log("Existem ", nImpar, "números impares")
    }else {
        console.log("Não existem números ímpares")

    }
