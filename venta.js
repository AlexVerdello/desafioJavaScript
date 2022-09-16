const productosVendidos = [];
const cargaProductos = [];
class Productos{
    constructor(nombreProducto, precioProducto, colorProducto, cantidadProducto){
        this.nombre = nombreProducto,
        this.precio = precioProducto,
        this.color = colorProducto,
        this.cantidad = cantidadProducto
    }
}
const funcionCargar = function() {
    
    let nombreProducto = '';
    let precioProducto = 0;
    let colorProducto = '';
    let cantidadProducto = 0;
    let seguir;

    
    do{
        nombreProducto = prompt(' Cual es el nombre del producto?')
        precioProducto = prompt(' Que precio tiene el producto?') 
        colorProducto = prompt(' En que color lo podran encontrar?') 
        cantidadProducto = prompt(' Cuantas unidad dispones?')   

        const pNuevo = new Productos(nombreProducto, precioProducto, colorProducto, cantidadProducto);
            pNuevo.nombre = nombreProducto; 
            pNuevo.precio = precioProducto; 
            pNuevo.color = colorProducto; 
            pNuevo.cantidad = cantidadProducto; 
            
            console.log(pNuevo);
            cargaProductos.push(pNuevo);
        
        seguir = prompt('Hay mas para cargar? si(s) / no(n)')
        
        
    }while (seguir == 's');
    
    console.log(cargaProductos);
    cargaProductos.forEach(producto => {producto.precio = producto.precio *1.21})
    return cargaProductos;
}

const funcionComprar = function() {

    let filtroNombre = prompt('Sabes que producto necesitas? Busquemoslo por su nombre... ')
    let result = cargaProductos.filter(el => {return el.nombre == filtroNombre})
    // console.log(result);
    if (result.length ===0){

        alert(`Disculpa no se encontro el producto que buscabas`)
    }else {
        alert(`Perfecto, todavia tenemos el producto en stock`)
    }
    
}


let accion = prompt('Buen dia, usted quiere 1- cargar o 2- comprar?')
while(accion == '1' || accion == '2'){

    switch (accion) {
        case '1':
            const carga = funcionCargar();
                break;
        case '2':
            funcionComprar();
                
                break;
            }
            accion = prompt('Buen dia, usted quiere 1- cargar o 2- comprar?')
}
