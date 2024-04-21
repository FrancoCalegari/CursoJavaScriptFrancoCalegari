//Problema A
document.addEventListener('DOMContentLoaded', function() {
    // Obtener una referencia al botón, importar cosas que primero necesitas del html
    let boton1 = document.getElementById('btnP1');
    let boton2 = document.getElementById('btnP2');

    let cofla = document.querySelector('#CoflaIN');
    let roberto = document.querySelector('#RobertoIN');
    let pedro = document.querySelector('#PedroIN');

    // Agregar un evento de clic al botón
    boton1.addEventListener('click', function() {

        alert("primero cofla")//idea de poner quien va primero
        let coflaValor =  cofla.value;//Luego se guarda el valor que antes se importo en otra variable
        let robertoValor =  roberto.value;
        let pedroValor =  pedro.value;

        //Cofla
        if (coflaValor >= 0.6 && coflaValor < 1) {
            alert("Comprate el helado de agua")
            alert("y te sobra " + (coflaValor - 0.6))
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
            alert("Comprate el pote de 1/4KG con confites")
        }

        else {
            alert("No te alcanza")
        }

        //Roberto
        alert("ahora Roberto")

        if (robertoValor >= 0.6 && robertoValor < 1) {
            alert("Comprate el helado de agua")
        }
        else if (robertoValor >= 1 && robertoValor < 1.6 ) {
            alert("Comprate el helado de crema")
        }

        else if (robertoValor >= 1.6 && robertoValor < 1.7 ) {
            alert("Comprate el helado de helardix")
        }

        else if (robertoValor >= 1.7 && robertoValor < 1.8 ) {
            alert("Comprate el helado de heladovich")
        }

        else if (robertoValor >= 1.8 && robertoValor < 2.9 ) {
            alert("Comprate el helado de helardo")
        }

        else if (robertoValor >= 2.9) {
            alert("Comprate el pote de 1/4KG con confites")
        }

        else {
            alert("No te alcanza")
        }

        //Pedro

        alert("ahora Pedro")

        if (pedroValor >= 0.6 && pedroValor < 1) {
            alert("Comprate el helado de agua")
        }
        else if (pedroValor >= 1 && pedroValor < 1.6 ) {
            alert("Comprate el helado de crema")
        }

        else if (pedroValor >= 1.6 && pedroValor < 1.7 ) {
            alert("Comprate el helado de helardix")
        }

        else if (pedroValor >= 1.7 && pedroValor < 1.8 ) {
            alert("Comprate el helado de heladovich")
        }

        else if (pedroValor >= 1.8 && pedroValor < 2.9 ) {
            alert("Comprate el helado de helardo")
        }

        else if (pedroValor >= 2.9) {
            alert("Comprate el pote de 1/4KG con confites")
        }

        else {
            alert("No te alcanza")
        }

        //##################FinPrograma
    });
});




//Problema B


    // Agregar un evento de clic al botón
    boton2.addEventListener('click', function() {

        alert("primero cofla")//idea de poner quien va primero
        let coflaValor =  cofla.value;//Luego se guarda el valor que antes se importo en otra variable
        let robertoValor =  roberto.value;
        let pedroValor =  pedro.value;

        //Cofla
        if (coflaValor >= 0.6 && coflaValor < 1) {
            alert("Comprate el helado de agua")
            alert("y te sobra " + coflaValor - 0.6)
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
            alert("Comprate el pote de 1/4KG con confites")
        }

        else {
            alert("No te alcanza")
        }

        //Roberto
        alert("ahora Roberto")

        if (robertoValor >= 0.6 && robertoValor < 1) {
            alert("Comprate el helado de agua")
        }
        else if (robertoValor >= 1 && robertoValor < 1.6 ) {
            alert("Comprate el helado de crema")
        }

        else if (robertoValor >= 1.6 && robertoValor < 1.7 ) {
            alert("Comprate el helado de helardix")
        }

        else if (robertoValor >= 1.7 && robertoValor < 1.8 ) {
            alert("Comprate el helado de heladovich")
        }

        else if (robertoValor >= 1.8 && robertoValor < 2.9 ) {
            alert("Comprate el helado de helardo")
        }

        else if (robertoValor >= 2.9) {
            alert("Comprate el pote de 1/4KG con confites")
        }

        else {
            alert("No te alcanza")
        }

        //Pedro

        alert("ahora Roberto")

        if (pedroValor >= 0.6 && pedroValor < 1) {
            alert("Comprate el helado de agua")
        }
        else if (pedroValor >= 1 && pedroValor < 1.6 ) {
            alert("Comprate el helado de crema")
        }

        else if (pedroValor >= 1.6 && pedroValor < 1.7 ) {
            alert("Comprate el helado de helardix")
        }

        else if (pedroValor >= 1.7 && pedroValor < 1.8 ) {
            alert("Comprate el helado de heladovich")
        }

        else if (pedroValor >= 1.8 && pedroValor < 2.9 ) {
            alert("Comprate el helado de helardo")
        }

        else if (pedroValor >= 2.9) {
            alert("Comprate el pote de 1/4KG con confites")
        }

        else {
            alert("No te alcanza")
        }

        //##################FinPrograma
        });



//Problema C