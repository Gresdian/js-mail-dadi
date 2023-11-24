
const button = document.getElementById('lancia');


button.addEventListener('click', function(){
    let dadoU , DadoB 

    dadoU = Math.round(Math.random() * (6 - 1) + 1);
    console.log(dadoU);
  
    DadoB = Math.round(Math.random() * (6 - 1) + 1);
    console.log(DadoB);

    if (dadoU > DadoB) {
        console.log("Complimenti giocatore1 hai Vinto!! ");
    } 
    else if(dadoU < DadoB){

        console.log("Purtroppo giocatore1 è andata male");
    } 
    else

    console.log('Pareggio');

})
