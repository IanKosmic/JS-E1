//Ejercicio 1
//Se agregó .toLowerCase() para convertir el input del prompt a un string con minúsculas, 
//y así podamos hacer la comparación en la condición IF, de forma más sencilla.
function verificarBelleza() {
    let belleza = prompt('¿Eres bellisimo/a?');
    if (belleza.toLowerCase() == 'sí' || belleza.toLowerCase() == 'si') {
        alert('Ciertamente');
    } else {
        alert('No te creo');
    }
}

verificarBelleza();

//Ejercicio 2
function esDivisibleEntreDos() {
    let numero = prompt('Ingresa un número:');
    if (numero % 2 == 0) {
        alert(numero + ' es divisible entre 2');
    } else {
        alert(numero + ' no es divisible entre 2');
    }
}

esDivisibleEntreDos();


//Ejercicio 3
function esNumeroPar() {
    let numeroPar = prompt('Ingresa un número:');
    if (numeroPar % 2 == 0) {
        alert(numeroPar + ' es un número par');
    } else {
        alert(numeroPar + ' no es un número par');
    }
}

esNumeroPar();


//Ejercicio 4
function verificarNumeroCliente() {
    let numeroCliente = prompt('Ingresa tu número de cliente:');
    if (numeroCliente == 1000) {
        alert('¡Ganaste un premio!');
    } else {
        alert(numeroCliente + ' - Lo sentimos, sigue participando');
    }
}

verificarNumeroCliente();


//Ejercicio 5
function compararDosNumeros() {
    let numero1 = prompt('Ingresa el primer número:');
    let numero2 = prompt('Ingresa el segundo número:');
    if (numero1 < numero2) {
        alert('El número menor es: ' + numero1);
    } else if (numero2 < numero1) {
        alert('El número menor es: ' + numero2);
    }
}

compararDosNumeros();


//Ejercicio 6
function numeroMayorDeTres() {
    let num1 = prompt('Ingresa el primer número:');
    let num2 = prompt('Ingresa el segundo número:');
    let num3 = prompt('Ingresa el tercer número:');
    if (num1 >= num2 && num1 >= num3) {
        alert('El número mayor es: ' + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        alert('El número mayor es: ' + num2);
    } else {
        alert('El número mayor es: ' + num3);
    }
}

numeroMayorDeTres();


//Ejercicio 7
function diaDeLaSemana() {
    let diaSemana = prompt('Ingresa un día de la semana:').toLowerCase();
    if (diaSemana == 'lunes') {
        alert('¡Ánimo, comienza la semana!');
    } else if (diaSemana == 'viernes') {
        alert('¡Ya casi es fin de semana!');
    } else if (diaSemana == 'sábado' || diaSemana == 'domingo') {
        alert('¡Es fin de semana, disfruta!');
    } else {
        alert('Es un día normal');
    }
}

diaDeLaSemana();


//Ejercicio 8
function verificarCalificacion() {
    let calificacion = prompt('Ingresa tu calificación (entre 1 y 10):');
    if (calificacion >= 1 && calificacion <= 10) {
        if (calificacion < 6) {
            alert('Reprobado');
        } else if (calificacion >= 6 && calificacion <= 8) {
            alert('Regular');
        } else if (calificacion == 9) {
            alert('Bien');
        } else if (calificacion == 10) {
            alert('Excelente');
        }
    } else {
        alert('Calificación fuera de rango, intenta de nuevo.');
    }
}

verificarCalificacion();


//Ejercicio 9
alert('- Menú de helados -');
alert('Los precios son los siguientes:');
alert('Helado sin topping = $50.00 MXN');
alert('Topping de OREO + $10.00 MXN')
alert('Topping de KitKat + $15.00 MXN')
alert('Topping de Brownie + $20.00 MXN');

let topping = prompt('Elige el sabor del topping que gustes (Oreo, KitKat, Brownie)');

function saborDeHelado(helado, oreo) {
    return (helado + oreo);
}
function saborDeHeladoKit(helado, kitkat) {
    return (helado + kitkat);
}
function saborDeHeladoBro(helado, brownie) {
    return (helado + brownie);
}

if (topping == 'oreo' || topping == 'OREO' || topping == 'Oreo') {
    let helado = 50;
    let oreo = 10;
    alert('El total de tu helado es de: $' + saborDeHelado(helado, oreo));
} if (topping == 'kitkat' || topping == 'KitKat' || topping == 'KITKAT') {
    let helado = 50;
    let kitkat = 15;
    alert('El total de tu helado es de: $' + saborDeHelado(helado, kitkat));
} if (topping == 'brownie' || topping == 'Brownie' || topping == 'BROWNIE') {
    let helado = 50;
    let brownie = 20;
    alert('El total de tu helado es de: $' + saborDeHeladoBro(helado, brownie));
} else {
    alert('La opción seleccionada no es válida, intenta de nuevo.');
}

//Ejercicio 10
alert('Programas educativos:');
alert('Course: $4999 MXN');
alert('Carrera: $3999 MXN');
alert('Master: $2999 MXN');

let programa = prompt('Elige un programa (Course, Carrera, Master):');
let precioMensual;
let duracion;

if (programa.toLowerCase() == 'course') {
    precioMensual = 4999;
    duracion = 2;
} else if (programa.toLowerCase() == 'carrera') {
    precioMensual = 3999;
    duracion = 6;
} else if (programa.toLowerCase() == 'master') {
    precioMensual = 2999;
    duracion = 12;
} else {
    alert('Programa no válido.');
}

let beca = prompt('¿Tienes alguna beca? (Facebook, Google, Jesua):');
let descuento = 0;

if (beca.toLowerCase() == 'facebook') {
    descuento = 0.20;
} else if (beca.toLowerCase() == 'google') {
    descuento = 0.15;
} else if (beca.toLowerCase() == 'jesua') {
    descuento = 0.50;
}

let precioFinalMensual = precioMensual * (1 - descuento);
let precioTotal = precioFinalMensual * duracion;

alert('El precio mensual con descuento es: $' + precioFinalMensual + ' MXN');
alert('El precio total por el programa es: $' + precioTotal + ' MXN');

//Ejercicio 11
let tipoVehiculo = prompt('Ingresa el tipo de vehículo (coche, moto, autobús):').toLowerCase();
let kmsRecorridos = parseInt(prompt('Ingresa la distancia recorrida en kilómetros:'));
let litrosConsumidos = parseInt(prompt('Ingresa los litros de combustible consumidos:'));
let precioKilometro;

if (tipoVehiculo == 'coche') {
    precioKilometro = 0.20;
} else if (tipoVehiculo == 'moto') {
    precioKilometro = 0.10;
} else if (tipoVehiculo == 'autobús') {
    precioKilometro = 0.50;
} else {
    alert('Tipo de vehículo no válido.');
}

let costoRecorrido = precioKilometro * kmsRecorridos;
let extraLitros = (litrosConsumidos <= 100) ? 5 : 10;
let totalAPagar = costoRecorrido + extraLitros;

alert('El total a pagar es: $' + totalAPagar.toFixed(2) + ' MXN');
