
let n = 9;
asterisco = "*";
espaco=" ";
z=2;
    for(let i=0; i<=n; i+=1){
        if(i%2 != 0) {
          if(i==n){
        console.log((asterisco.repeat(i)) );
            } else if (i==1) {
        console.log((espaco.repeat((n-i)/2))+ asterisco);
            } else {
                console.log((espaco.repeat((n-i)/2))+ asterisco + (espaco.repeat((i-2))+ asterisco));

            }
        }
    }