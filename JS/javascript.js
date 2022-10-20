window.onload = function(){
    var repeticao = 0;

    //Precisamos de uma variável inicial.
    while(repeticao < 10){
        console.log("Olá mundo número: " +repeticao);
        repeticao++; //sem "repeticao++" o navegador trava.
    }

    console.log("Cheguei até o final!");
}