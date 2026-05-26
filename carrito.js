let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];



/* AGREGAR PRODUCTOS */

function agregar(nombre, precio){

    carrito.push({

        nombre: nombre,
        precio: precio

    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();

    mostrarToast(nombre);
}



/* MOSTRAR CARRITO */

function mostrarCarrito(){

    let lista =
    document.getElementById("lista");

    let total =
    document.getElementById("total");

    let contador =
    document.getElementById("contador");



    /* EVITAR ERRORES */

    if(!lista || !total || !contador){
        return;
    }



    lista.innerHTML = "";

    let suma = 0;



    carrito.forEach(producto => {

        let item =
        document.createElement("div");

        item.classList.add("item");

        item.innerHTML =

        "<b>" +
        producto.nombre +
        "</b><br>$" +
        producto.precio;



        lista.appendChild(item);

        suma += producto.precio;
    });



    total.innerText = suma;

    contador.innerText =
    carrito.length;
}



/* ABRIR CARRITO */

function abrirCarrito(){

    document
    .getElementById("panelCarrito")
    .classList.add("activo");
}



/* CERRAR CARRITO */

function cerrarCarrito(){

    document
    .getElementById("panelCarrito")
    .classList.remove("activo");
}



/* MOSTRAR PAGO */

function mostrarPago(){

    document
    .getElementById("seccionPago")
    .style.display = "block";
}



/* CAMBIAR METODO */

function cambiarMetodo(){

    let metodo =
    document.getElementById("metodoPago").value;



    document
    .getElementById("transferencia")
    .style.display = "none";

    document
    .getElementById("tarjeta")
    .style.display = "none";



    if(metodo == "transferencia"){

        document
        .getElementById("transferencia")
        .style.display = "block";
    }



    if(metodo == "tarjeta"){

        document
        .getElementById("tarjeta")
        .style.display = "block";
    }
}



/* FINALIZAR COMPRA */

function finalizarCompra(){



    if(carrito.length == 0){

        alert("Tu carrito está vacío");

        return;
    }



    let metodo =
    document.getElementById("metodoPago").value;



    if(metodo == ""){

        alert("Selecciona un método de pago");

        return;
    }



    document
    .getElementById("mensajeCompra")
    .style.display = "flex";



    carrito = [];

    localStorage.removeItem("carrito");



    mostrarCarrito();



    setTimeout(() => {

        document
        .getElementById("mensajeCompra")
        .style.display = "none";

        cerrarCarrito();

    }, 3000);
}



/* TOAST */

function mostrarToast(nombre){

    let toast =
    document.getElementById("toast");



    if(!toast){
        return;
    }



    toast.innerHTML =

    "✅ " +
    nombre +
    " agregado correctamente";



    toast.classList.add("mostrar");



    setTimeout(() => {

        toast.classList.remove("mostrar");

    }, 2500);
}



/* CARGAR */

window.onload = mostrarCarrito;