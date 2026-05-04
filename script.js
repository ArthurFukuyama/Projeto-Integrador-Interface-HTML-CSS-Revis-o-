function validarNumero(){
    //Recebe os dados através dos IDs e atribui eles as variáveis
    let numero=document.getElementById('numero').value
    let mensagem=document.getElementById('mensagem')
    //Verifica se a variável numero possui um valor em branco
    if(numero == ""){
        //Atribui esse conteúdo em texto a variável mensagem e exibe no site
        mensagem.textContent = "Por favor, insira um número.";
        //Atribui a cor do conteúdo presente na variável mensagem
        mensagem.style.color = "red";
    }
    else{
        //Converte o conteúdo da variável numero de texto para um número inteiro
        numero = parseInt(numero)
        //Verifica se o conteúdo da variável numero é maior que 10
        if(numero > 10){
            //Atribui esse conteúdo em texto a variável mensagem e exibe no site
            mensagem.textContent = "O número é maior que 10.";
            //Atribui a cor do conteúdo presente na variável mensagem
            mensagem.style.color = "green";
        }
        else{
            //Verifica se o conteúdo da variável numero é maior que 5
            if(numero >5){
                //Atribui esse conteúdo em texto a variável mensagem e exibe no site
                mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
                //Atribui a cor do conteúdo presente na variável mensagem
                mensagem.style.color = "orange";
            }
            else{
                //Atribui esse conteúdo em texto a variável mensagem e exibe no site
                mensagem.textContent = "O número é 5 ou menor.";
                //Atribui a cor do conteúdo presente na variável mensagem
                mensagem.style.color = "blue";
            }
        }
    }
}
