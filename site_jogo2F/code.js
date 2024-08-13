$(document).ready(function(){

    var resposta = 1 + Math.floor(Math.random() * 100);

    alert("Bem-Vindo!!");

    $ ("#btn-resposta").on('click', function(){
        if ($("#numero").val() == resposta){
            alert("Parabens!!")
            
        }else if($("#numero").val() > resposta){
            alert("O Número Digitado é Maior que a Resposta!!");
          

        }else if($("#numero").val() < resposta ){
            alert ("O número é menor que a resposta!!");
            
        }

       
        
       
    });

});