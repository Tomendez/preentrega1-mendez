// creando ciclo por condicion

let total = 0;
let mensaje = prompt('Desea comprar un producto? (s-si / n-no)');
while (mensaje == 's' || mensaje == 'S') {
    let producto = prompt('1-Escritorio\n2-Mesa para Comedor\n3-Estantería Industrial\n4-Biblioteca\n5-Recibidor+Zapatero\n6-Desayunador con Banquetas');
    switch (producto) {
        case '1':
            alert('Escritorio agregado al carrito ... $ 10000');
            precioTotal(10000);
            break;
        case '2':
            alert('Mesa agregada al carrito ... $ 15000');
            precioTotal(15000);
            break;
        case '3':
            alert('Estantería agregada al carrito ... $ 17000');
            precioTotal(17000);
            break;
        case '4':
            alert('Biblioteca agregada al carrito ... $ 25000');
            precioTotal(25000);
            break;
        case '5':
            alert('Recibidor+Zapatero agregado al carrito ... $ 18000');
            precioTotal(18000);
            break;
        case '6':
            alert('Desayunador con Banquetas agregados al carrito ... $ 30000');
            precioTotal(30000);
            break;
        default:
            alert('Producto inexistente');
            break;
    }
    mensaje = prompt('Desea comprar otro producto? (s-si / n-no)');
}

alert ('El total de la compra es de $ '+total)

function precioTotal(precio) {
    total = total + precio;
    alert('Llevas gastado $' + total)
}



