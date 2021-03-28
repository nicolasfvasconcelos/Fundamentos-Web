/*Referenciar variável: há 3 formas*/
/*1- var = variável de escopo global, ou seja, pode ser chamada em qualquer lugar*/
/*2- let = variável de escopo local*/
/*3- const = variável de escopo global, porém é constante*/  
/*Em js as variáveis não são tipadas*/ 
/*LEmbrando da arvore do video SJ1 - acesso window, doc, procuro(get) por ID e passo o ID entre parenteses para acessar meu DOM*/


/*outros mios de acessar
via tag: getElementByTagName()
via Id: getElementById()
via Nome: getElementsByName()
via class: getElementsByClassName()
via Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")
nome.style.width='100%'
email.style.width='100%'

/*UTILIZANDO FUNÇÕES */

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
    txtNome.innerHTML = "Nome Inválido!"
    txtNome.style.color = "red"
        /*innerHTML = colocando valor dentro da div*/ 
    }
    else {
        txtNome.innerHTML= "Nome Válido!"
        txtNome.style.color = "green"
        nomeOK = true
    }
}

/**Validar e-mail */
function validaEmail() {
   let txtEmail = document.querySelector("#txtEmail")
   if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
    /*indexOf = saber se tem determinado caracter e retorna 1(caso tenha) e -1(caso não tenha)*/
   txtEmail.innerHTML = "E-mail Inválido!"
   txtEmail.style.color = "red"
}
else{
    txtEmail.innerHTML = "E-mail Válido!"
    txtEmail.style.color = "green"
    emailOk = true
    }
}

/*  validando assunto*/

function validaAssunto(){
let txtAssunto = document.querySelector("#txtAssunto")
if(assunto.value.length >= 100) {
    txtAssunto.innerHTML = "Excesso de caractéres!"
    txtAssunto.style.backgroundColor = "red"
    txtAssunto.style.display = "block"
}
else {
    txtAssunto.innerHTML = "Ainda é possível mais!"
    txtAssunto.style.display = "none"
    assuntoOk = true
    }
}

function enviar(){
    if(nomeOK == true && emailOk == true && emailOk == true){
        alert("Formulário enviado com sucesso!")
    }
    else{
        alert("Preencha o formulário corretamente!")
    }
}

function mapaZoom(){
mapa.style.width = "800px"
mapa.style.height="600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height= "250px"
}