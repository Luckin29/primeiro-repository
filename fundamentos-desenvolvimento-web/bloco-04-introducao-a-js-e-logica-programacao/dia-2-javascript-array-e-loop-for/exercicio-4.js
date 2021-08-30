let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i=0; i<numbers.length;i+=1 ) {
soma = soma+numbers[i];
}
if ((soma/numbers.length) >20 ){
console.log("O valor é maior que 20");
} else {
console.log("O valor é menor ou igual 20");
}