document.write('<p>----------------------...');
document.write('<p>DEFINIÇÃO E ATRIBUIÇÃO DE VARIÁVEIS:');
document.write('<p>var js_num = <b>30</b>; (js_num recebe valor 30)');
var js_num = 30;

document.write('<p>----------------------...');
document.write('<p>OPERADOR TERNÁRIO <b>(? :)</b> com OPERADORES RELACIONAIS (==, !=, <):');

document.write('<p>js_num <b>==</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
    ((js_num ==20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));

document.write('<p>js_num <b>!=</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
    ((js_num !=20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));

document.write('<p>js_num <b><</b> 50 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
    ((js_num < 50) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'));

document.write('<p>----------------------...');
document.write('<p>operador ternário COM eXPRESSÃO ARITIMÉTICA:');

document.write('<p>js_num <b>-</b> <b>==</b> 0 <b> "SIM" </b> <b>:</b> "NÃO" - Resposta =>');
    ((js_num - 20) == 0) ? document.write('<b>SIM</b> + js_num') : document.write('<b>NÃO</b>');
    