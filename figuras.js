//Codigo del cuadrado

const cuadrado = (ladoCuadrado) => {
    console.group("Cuadrados");
    console.log(`Los lados del cuadrado miden ${ladoCuadrado}`);
    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log(`El area del cuadrado es ${areaCuadrado}`);
    const perimetroCuadrado = ladoCuadrado*4;
    console.log(`El perímetro del cuadrado es ${perimetroCuadrado}`);
    console.groupEnd();
}

cuadrado(5);

//Codigo del triangulo del

const triangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => {
    console.group("Triangulos");

    console.log(`Los lados del triangulo miden: Lado 1: ${ladoTriangulo1}, Lado 2: ${ladoTriangulo2}, base: ${baseTriangulo}`);
    const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
    const x1 = ((ladoTriangulo1*ladoTriangulo1)+(baseTriangulo*baseTriangulo)-(ladoTriangulo2*ladoTriangulo2))/(2*baseTriangulo);
    const alturaTriangulo = Math.sqrt((ladoTriangulo1*ladoTriangulo1)-(x1*x1));
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log(`El área del Triangulo es: ${areaTriangulo}`);
    console.log(`El perimetro del Triangulo es: ${perimetroTriangulo}`);

    console.groupEnd();
}

triangulo(5,5,9);


