function funcao()
{
    if($("#cidade").val() == 0) {
        alert("Selecione a cidade");
        return 0;
    }else if($("#texto").val() == 0) {
        alert("Preencha seu nome");
        return 0;
    }else if($("#rg").val() == 0) {
        alert("Preencha RG");
        return 0;
    }else if($("#cpf").val() == 0) {
        alert("Preencha CPF");
        return 0;
    }else if($("#email").val() == 0) {
        alert("Preencha Email");
        return 0;
    }






    alert($("#texto").val() + '\n' + $("#rg").val() + '\n' + $("#cpf").val() + '\n' +  $("#email").val() + '\n' + $("#cidade").val() ) ;




}
