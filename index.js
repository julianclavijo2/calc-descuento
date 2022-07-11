

let cupon = '';


const descuento = (idProduct , valor , descuento ) => {

    const valoraDescontar = valor *  (descuento / 100);
    const valorFinal = valor - valoraDescontar;

    console.log(valoraDescontar);
    
    const label = document.getElementById('product' + idProduct + '');
    label.innerHTML = 'Precio con descuento : ' + '$' + valorFinal;
    
}


document.addEventListener('change' , () => {

    cupon = document.getElementById('cupones');

});

function calculate (){
    document.getElementsByTagName('p')[0].innerHTML='';
    let operacion = (document.getElementById('price').value * cupon.value ) / 100;
    document.getElementsByTagName('p')[0].innerHTML = '$';
    document.getElementsByTagName('p')[0].append(document.getElementById('price').value - operacion);
    document.getElementsByTagName('p')[0].style.fontSize = '50px';
}
