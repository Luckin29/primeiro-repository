let w ='trybezinha';
let e = 'bezinha';

function verificaFimPalavra(word, ending) {
    let ultimaW = (word.split('').length)-(1);
    let ultimaE = (ending.split('').length)-(1);
    let contador = 0;

    for(let i=0; i<ending.split('').length; i++){
        if (ending[i] == word[ultimaW - ultimaE + i] ) {
            contador += 1
        }else {}
    }
    if (contador == ending.split('').length){
    console.log("true")
    }else {console.log("false")
}
}


verificaFimPalavra(w, e);