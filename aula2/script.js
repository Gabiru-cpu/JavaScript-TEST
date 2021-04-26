var js_name;
var js_lastName;
var js_fullName;

function concatena() {
    // Entrada de Dados
    js_name = document.FormConcatena.f_name.value;
    js_lastName = document.FormConcatena.f_lastName.value;
    // Processamento de Dados
    js_fullName = js_name + ' ' + js_lastName;
    // Saida de Dados
    window.alert ('Olá' + js_fullName);
}