function PegaInformações() {
    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

   if (nome == "") {
     document.getElementById("verNome").innerHTML = "Nome inválido"
   } 
   
   else {
     document.getElementById("verNome").innerHTML = "Nome" + nome
   }

   if (email == "") {
    document.getElementById("verEmail").innerHTML = "Email inválido"
   } 
   
   else {
    document.getElementById("verEmail").innerHTML = "Email" + email
   }

   if (senha == "") {
    document.getElementById("verSenha").innerHTML = "Senha inválida"
   } 
   
   else {
     document.getElementById("verSenha").innerHTML = "Senha" + senha
   }

}

