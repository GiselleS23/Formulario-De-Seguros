function mostrarPrecio() {
    var tipoSeguro = document.getElementById("tipoSeguro").value;
    var precioDiv = document.getElementById("precio");
    var precio = 0;
    switch (tipoSeguro) {
        case "basico":
            precio = 500;
            break;
        case "intermedio":
            precio = 1000;
            break;
        case "premium":
            precio = 1500;
            break;
    }
    precioDiv.innerHTML = "Precio: $" + precio;
}



document.getElementById("formularioSeguro").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var tipoSeguro = document.getElementById("tipoSeguro").value;
    var precio = 0;
    switch (tipoSeguro) {
        case "basico":
            precio = 500;
            break;
        case "intermedio":
            precio = 1000;
            break;
        case "premium":
            precio = 1500;
            break;
    }
    var mensaje = "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n" +
        "DNI: " + dni + "\n" +
        "Email: " + email + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Tipo de seguro: " + tipoSeguro + "\n" +
        "Precio: $" + precio;
    alert(mensaje);
});
