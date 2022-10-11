
passSaved = "1234";


function login() {

    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let userPass = prompt('Ingresa tu contraseña ' + (i + 1) + ' oportunidades.');

        if (userPass === passSaved) {

            alert('Ingreso exitoso. Bienvenido/a a la tienda');
            ingresar = true;
            break;

        } else {

            alert('Error. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;

}


login()

class Articulo {
    constructor(titulo, marca, rubro, precio) {
        this.titulo = titulo;
        this.marca = marca;
        this.rubro = rubro;
        this.precio = parseInt(precio);
    }
}


const articulos = [
    new Articulo("Consola Ps4", "Playstation", "Videojuegos", 60000),
    new Articulo("Control dual shock", "Playstation", "accesorios", 13000),
    new Articulo("Volante de carrera", "Logitech", "Accesorios", 50000),
    new Articulo("Mouse", "Razer", "Computacion", 8000)


]

let continuar = true;

while (continuar) {
    let ingreso = prompt("Ingresa los datos del Producto: titulo, Marca, Rubro, Precio,  separados por una barra diagonal (/). Ingresa X para finalizar'");

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    let datos = ingreso.split("/");
    const articulos = new Articulo(datos[0], datos[1], datos[2], datos[3]);
}



alert(crearStringResultado);

let productoSelecionado = prompt("Que producto esta buscando?");

const busqueda = articulos.filter((Articulo) => Articulo.titulo.toLowerCase().includes(productoSelecionado.toLowerCase()))

if (busqueda.length == 0) {
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
} else {
    const imprimible = busqueda.map((Articulo) => Articulo.titulo);
    alert('Los productos de nuestro catálogo,  que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}