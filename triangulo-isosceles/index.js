const adquisicionDatos = () => {
    const lado1 = document.querySelector("#lado1").value;
    const lado2 = document.querySelector("#lado2").value;
    const base = document.querySelector("#base").value;
    validacion(lado1, lado2, base);
}

const validacion = (lado1, lado2, base) => {
    const div = document.querySelector("#sectionValidacion");
    if (lado1 === lado2 || lado1 === base || lado2 === base){
        div.innerHTML = `<p>El triangulo es Isósceles</p>`;
        altura(lado1, lado2, base);
    } else {
        div.innerHTML = `<p>El triangulo no es Isósceles</p>`;
        altura(lado1, lado2, base);
    }
}

const altura = (lado1, lado2, base) => {
    const div = document.querySelector("#sectionAltura");
    const x1 = ((lado1*lado1)+(base*base)-(lado2*lado2))/(2*base);
    const altura = Math.sqrt((lado1*lado1)-(x1*x1));
    div.innerHTML = `<p>La altura del triangulo es: ${altura}</p>`;
}

