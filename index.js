const descuento = (valor , descuento) => {

    const valoraDescontar = valor *  (descuento / 100);
    const valorFinal = valor - valoraDescontar;

    return valorFinal;
    
}