//Problema A
document.addEventListener('DOMContentLoaded', function() {
    // Obtener una referencia al botón, importar cosas que primero necesitas del html
    let boton = document.getElementById('btnP1');
    let cofla = document.querySelector('#CoflaIN');

    // Agregar un evento de clic al botón
    boton.addEventListener('click', function() {
        let coflaValor =  cofla.value;//Luego se guarda el valor que antes se importo en otra variable
        // let roberto = prompt("Cuanto dinero tiene cofla: ");
        // let pedro = prompt("Cuanto dinero tiene cofla: ");

        // let cofla = 3;
        let roberto = 1.5;
        let pedro = 1.7;

        if (coflaValor >= 0.6 && coflaValor < 1) {
            alert("Comprate el helado de agua")
        }
        else if (coflaValor >= 1 && coflaValor < 1.6 ) {
            alert("Comprate el helado de crema")
        }

        else if (coflaValor >= 1.6 && coflaValor < 1.7 ) {
            alert("Comprate el helado de helardix")
        }

        else if (coflaValor >= 1.7 && coflaValor < 1.8 ) {
            alert("Comprate el helado de heladovich")
        }

        else if (coflaValor >= 1.8 && coflaValor < 2.9 ) {
            alert("Comprate el helado de helardo")
        }

        else if (coflaValor >= 2.9) {
            alert("Comprate el pote de 1/4KG")
        }

        else {
            alert("No te alcanza")
        }
        //##################FinPrograma
    });
});




//Problema B

//Problema C