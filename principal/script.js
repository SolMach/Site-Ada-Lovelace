document.getElementById("enviar").addEventListener("click", Clicar)

function Clicar(){
    if (document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""){
        alert("Pronto! Você receberá as novidades por e-mail!")
    }else{
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}