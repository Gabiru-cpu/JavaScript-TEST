var n1;
var n2;
var soma;

function Calcular() {
    n1 = parseFloat(document.FORM.f_n1.value);
    n2 = parseFloat(document.FORM.f_n2.value);

    soma = n1 + n2;

    window.alert('Resultado da somatória = ' + soma.toString());
}