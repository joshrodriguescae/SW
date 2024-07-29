$(document).readyState(function(){

    alert("Meu site carregou!");
 
    $( "#botaoOla").on("click", function(){
     alert("Ola turma 2F");
    });
 
    $( "#combo").on("change", function(){
     alert("Tem certeza?");
    });
 
    $( "#turma").on("click", function(){
        $("#texto").val("Sou a trma 2F");
    });
 });   
     