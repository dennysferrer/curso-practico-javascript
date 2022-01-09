//Codigo del cuadrado

const calcularPerimetroCuadrado = () => {
    const ladoCuadrado = document.getElementById("InputCuadrado").value;
    const div = document.getElementById("ResultadoPerimetro");
    const perimetroCuadrado = ladoCuadrado*4;;
    console.log(`El perimetro del cuadrado es ${perimetroCuadrado}`);
    div.innerHTML=`<p>${perimetroCuadrado}</p>`;
}

const calcularAreaCuadrado = () => {
    const ladoCuadrado = document.getElementById("InputCuadrado").value;
    const div = document.getElementById("ResultadoArea");
    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log(`El área del cuadrado es ${areaCuadrado}`);
    div.innerHTML=`<p>${areaCuadrado}</p>`;
}

//Codigo del triangulo del

const calcularPerimetroTriangulo = () => {
    const ladoTriangulo1 = document.getElementById("Lado1").value;
    const ladoTriangulo2 = document.getElementById("Lado2").value;
    const baseTriangulo = document.getElementById("base").value;    
    const div = document.getElementById("ResultadoPerimetroTriangulo")
    console.log(`Los lados del triangulo miden: Lado 1: ${ladoTriangulo1}, Lado 2: ${ladoTriangulo2}, base: ${baseTriangulo}`);
    const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
    div.innerHTML = `<p>${perimetroTriangulo}</p>`;
    
}

const calcularAreaTriangulo = () => {
    const ladoTriangulo1 = document.getElementById("Lado1").value;
    const ladoTriangulo2 = document.getElementById("Lado2").value;
    const baseTriangulo = document.getElementById("base").value;    
    const div = document.getElementById("ResultadoAreaTriangulo")
    const x1 = ((ladoTriangulo1*ladoTriangulo1)+(baseTriangulo*baseTriangulo)-(ladoTriangulo2*ladoTriangulo2))/(2*baseTriangulo);
    const alturaTriangulo = Math.sqrt((ladoTriangulo1*ladoTriangulo1)-(x1*x1));
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
    console.log(`El área del Triangulo es: ${areaTriangulo}`);
    div.innerHTML = `<p>${areaTriangulo}</p>`;
}



