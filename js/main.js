const h1 = document.querySelector('h1');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit',sumarInputs)

function sumarInputs(event) {
    event.preventDefault();
    const resultado = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: "+ resultado;
}
