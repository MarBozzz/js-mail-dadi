const eventiPossibili = [1,2,3,4,5,6];
const randomIndexUser = Math.floor(Math.random() * eventiPossibili.length);
const randomIndexComp = Math.floor(Math.random() * eventiPossibili.length);
const button = document.querySelector('#bottone');
const output = document.getElementById('output');

//genero un numero random abbinato all'user, clickando un bottone
button.addEventListener('click', function(){
    document.querySelector('#output-giocatore').innerHTML = eventiPossibili[randomIndexUser];
}); 

//faccio generare un numero random anche al computer
button.addEventListener('click', function(){
    document.querySelector('#output-computer').innerHTML = eventiPossibili[randomIndexComp];

//confronto i dati per stabilire chi vince con il punteggio più alto e stampo l'output
    if(randomIndexUser > randomIndexComp){
      output.innerHTML = 'Hai vinto tu';
    } else if (randomIndexUser < randomIndexComp) {
      output.innerHTML = 'Ha vinto il computer';
    } else {
      output.innerHTML = "Pareggio";
    }
});