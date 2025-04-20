import _ from 'underscore';
// Esta función crea un nuevo deck
/**
 * Esta funcion crea una nueva baraja
 * @param {array<String>} tiposDeCarta Ejemplo:['C','D','H','S']; 
 * @param {array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {array<String>} retorna un nuevo mazo de cartas
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
    if(!tiposDeCarta || tiposDeCarta === 0) throw new Error('tiposDeCarta son obligatorio como un arreglo de strings');
    if(!tiposEspeciales || tiposEspeciales === 0) throw new Error('tiposEspeciales son obligatorio como un arreglo de strings');
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}