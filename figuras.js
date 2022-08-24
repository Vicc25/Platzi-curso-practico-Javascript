//Código del cuadrado
console.group("cuadrados");

//const ladoCuadrado= 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
    //console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");    
} 

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();


//Código del triángulo

console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}



function areaTriangulo (base, altura){
    return (base * altura) / 2 ;
}


//console.log(
   // "Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " +  ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
    
   // const alturaTriangulo = 5.5;

    //console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

   // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

    //console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm");

    //const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

    //console.log("El area del Triángulo es: " + areaTriangulo + "cm");

    console.groupEnd();

    // Código del Círculo
console.group("Círculos");

function diametroCirculo(radio){
    return radio * 2;
}

//Radio
//const radioCirculo = 4;
//console.log("El radio del Círculo es: " + radioCirculo + "cm");

//Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del Círculo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es " + PI);

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI ;
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del Círculo es: " + perimetroCirculo + "cm");


// Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio * radio) * PI;
}

//console.log("El area del Círculo es: " + areaCirculo + "cm");

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}