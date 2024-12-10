
// Metodo if/else

let domanda = `inserisci qui la temperatura in gradi centigradi (if/else) `

let temperatura = prompt(domanda)

if (temperatura >= 0 && temperatura < 20) {
    console.log(`non ci sono piu’ le mezze stagioni`); 
} else if ( temperatura >= 20 && temperatura < 30 ){
    console.log( `mi dia una peroni sudata` );  
} else if ( temperatura >= 30 ) {
    console.log( `lu mare, lu sole, lu ientu` );
} else if ( temperatura < 0 && temperatura >= -10 ) {
    console.log( `non e’ tanto il freddo quanto l’umidità` );
} else if ( temperatura < -10 ) {
    console.log( `copriti…ancora ti raffreddi` );
} else if ( temperatura != typeof number ) {
    console.log( `dato non valido` );
}


// Metodo switch

let domanda_1 = `inserisci qui la temperatura in gradi centigradi(switch) `

let temperatura_1 = prompt(domanda_1)

switch (true){
    case temperatura_1 >= 0 && temperatura_1 < 20:
        console.log( `non ci sono piu’ le mezze stagioni` );
        break;
    case temperatura_1 >= 20 && temperatura_1 < 30 :
        console.log( `mi dia una peroni sudata ` );
        break;
    case temperatura_1 >= 30 :
        console.log( `lu mare, lu sole, lu ientu` );
        break;
    case temperatura_1 < 0 && temperatura_1 >= -10 :
        console.log( `non e’ tanto il freddo quanto l’umidità` );
        break;
    case temperatura_1 < -10 :
        console.log( `copriti…ancora ti raffreddi` );
        break;
    case temperatura_1 != typeof number :
        console.log( `dato non valido` );
        break;     
}
