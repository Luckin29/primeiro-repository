const a = 7;
const b = 8;
const c = 9;

if(a>b && a>c) {
    console.log('O número ', a, 'é maior que o número ', b ,'e o número', c);
} else if (b>c && b>a) {
    console.log('O número ', b,' é maior que o número ', a ,'e o número', c);
} else if(c>a && c>b) {
    console.log('O número ', c,' é maior que o número ', a ,'e o número ', b);
} else {
    console.log("Os números", a,", ",b,"e ", c, " são iguais.");
}