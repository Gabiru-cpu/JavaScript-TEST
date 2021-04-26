var qht;
var vht;
var inss;
var tdes;
var sb;
var sl;

qht = parseFloat(window.prompt('Informe a Quantidade de Horas Trabalhadas/Mês: (135 a 180)','00'));
vht = parseFloat(window.prompt('Informe o Valor de Hora Trabalhada: (25 a 50)','00'));
inss = parseFloat(window.prompt('Informe o Percentual de Desconto INSS: (5 a 15)','00'));

sb = vht * qht;
tdes = (inss/100) * sb;
sl = sb - tdes;

document.write('<p><b>DEMONSTRATIVO PARA CÁLCULO DO SALÁRIO LÍQUIDO</b>');

document.write('<p>Quantidade de Horas Trabalhadas (135 a 180) => <b>' + qht + '</b>');

if (qht > 180){
    document.write('...(<b>Valor Máximo Excedido!</b>)');
}
if (qht < 135){
    document.write('...(<b>Valor Mínimo Inválido!</b>)');
}

document.write('<p>Valor da Hora Trabalhada (25 a 50) =>' + vht);
if(vht > 50){
    document.write('...(<b>Valor Máximo Excedido!</b>)');
}
if(vht < 25){
    document.write('...(<b>Valor Mínimo Inválido!</b>)');
}

document.write('<p>Valor da Hora Trabalhada (5 a 15) =>' + inss);
if(inss > 15){
    document.write('...(<b>Valor Máximo Excedido!</b>)');
}
if(inss < 5){
    document.write('...(<b>Valor Mínimo Inválido!</b>)');
}

document.write('<h2>RESULTADO:</h2>');
document.write('<hr>');
document.write('<p><b>Salário BRUTO = </b>' + sb);
document.write('<p>Total de Descontos INSS = ' + tdes);
document.write('<p><b>Salário LÍQUIDO = </b>' + sl);

if(sl > 10500){
    document.write('...(<b>Salário Elevado! </b>maior que 10.500)');
}
else{
    if(sl > 6000){
        document.write('...(<b>Salário Satisfatório! </b>maior que 6.000)')
    }
    else{
        if(sl > 3000){
            document.write('...(<b>Salário Moderado! </b>maior que 3.000)')
        }
        else{
            document.write('...(<b>Salário insatisfatório! </b>menor ou igual a 3.000)')
        }
    }
}