

function isPalindrome(palavra) {
    resultado = palavra.split("") ;
    resultado.reverse();
    resultado = resultado.join("");
    if (resultado == palavra) {
        console.log("É um palíndromo")
    }else {
        console.log("Não é um Palíndromo")
    }
    }

isPalindrome("arara")
