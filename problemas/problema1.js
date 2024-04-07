//Problema A
document.addEventListener('DOMContentLoaded', function() {
    // Obtener una referencia al botón
    let boton = document.getElementById('btnP1');

    // Agregar un evento de clic al botón
    boton.addEventListener('click', function() {
        let cofla = prompt("Cuanto dinero tiene cofla: ");
        // let roberto = prompt("Cuanto dinero tiene cofla: ");
        // let pedro = prompt("Cuanto dinero tiene cofla: ");

        // let cofla = 3;
        let roberto = 1.5;
        let pedro = 1.7;

        if (cofla >= 0.6 && cofla < 1) {
            alert("Comprate el helado de agua")
        }
        else if (cofla >= 1 && cofla < 1.6 ) {
            alert("Comprate el helado de crema")
        }

        else if (cofla >= 1.6 && cofla < 1.7 ) {
            alert("Comprate el helado de helardix")
        }

        else if (cofla >= 1.7 && cofla < 1.8 ) {
            alert("Comprate el helado de heladovich")
        }

        else if (cofla >= 1.8 && cofla < 2.9 ) {
            alert("Comprate el helado de helardo")
        }

        else if (cofla >= 2.9) {
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