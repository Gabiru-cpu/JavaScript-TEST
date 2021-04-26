var n1;
var n2;

n1 = parseFloat(window.prompt('Informe o valor do primeiro número: ', '00'));
n2 = parseFloat(window.prompt('Informe o valor do segundo número: ', '00'));

document.write('número 1 digitado = ' + n1);
document.write('<br>número 2 digitado = ' + n2);

if(n1 > n2){
    document.write('<p><br>Classificação em Ordem Crescente:</b>' + n1 + ' e ' + n2);    
}
else {
    document.write('<p><br>Classificação em Ordem Decrescente:</b>' + n2 + ' e ' + n1);
}

