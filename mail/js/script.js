let email = prompt('inserisci la tua mail');

let emails = ['tizio@gmail.it', 'caio@gmail.it' , 'sempronio@gmail.it']
     
    if(emails[0] != email && emails[1] != email && emails[2] != email) {
        console.log('Non hai il permesso di accedere!')
    } else {
        console.log('Puoi accedere!')
    }
