
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








if (login()) {
    let precio1 = 2000
    let precio2 = 2500
    let precio3 = 2000


    let opcion = prompt('Elegí una opción: \n1- curso python. \n2 - curso javascript. \n3 - curso php.  \nPresioná X para finalizar.');


    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {

            case '1':
                alert('Curso Python $ ' + precio1);
                break;

            case '2':
                alert('Curso javascript $ ' + precio2);

                break;

            case '3':

                alert('Curso php $ ' + precio3);
                break;

            default:
                alert('Elegiste una opción inválida');
                break;

        }

        opcion = prompt('Elegí una opción: \n1- curso python. \n2 - curso javascript. \n3 - curso php.  \nPresioná X para finalizar.');


    }

}


alert('Gracias por su compra');


