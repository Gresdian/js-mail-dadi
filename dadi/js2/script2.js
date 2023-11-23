
const button = document.getElementById('lancia');


button.addEventListener('click', function(){
    let dadoU , DadoB ,risultato, sconfitta

    dadoU = Math.round(Math.random() * (6 - 1) + 1);
    console.log(dadoU);
  
    DadoB = Math.round(Math.random() * (6 - 1) + 1);
    console.log(DadoB);

    if (dadoU > DadoB) {
  
        risultato = "Complimenti giocatore1 hai Vinto!! ";
        console.log(risultato);
    } 
    else if(dadoU == DadoB){
        risultato = "Pareggio!!";
        console.log(risultato);
    } 
    else
        sconfitta = "Purtroppo giocatore1 è andata male";
        console.log(sconfitta);

})
