const descuento = (idProduct , valor , descuento ) => {

    const valoraDescontar = valor *  (descuento / 100);
    const valorFinal = valor - valoraDescontar;

    console.log(valoraDescontar);
    
    const label = document.getElementById('product' + idProduct + '');
    label.innerHTML = 'Precio con descuento : ' + '$' + valorFinal;
    
}

