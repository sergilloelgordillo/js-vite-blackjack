
// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<String>} deck es una arreglo de string
 * @returns {String} retorna una carta del mazo
 */
export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) throw 'No hay cartas en el deck';    
    return deck.pop();
}
