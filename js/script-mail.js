
//creo le variabili e una lista array di email
let isPresent = false;
const output = document.getElementById('output');
const listaEmail = ['abc@mail.com', 'bcd@mail.it', 'cde@mail.com', 'def@mail.es', 'efg@mail.uk'];

//chiedo all utente di inserire la sua email 
const emailInserita = prompt('Inserisci email');

//cerco la sua email nella lista
for (let i = 0; i < listaEmail.length; i++) {
  if (emailInserita === listaEmail[i]) {
    isPresent = true;
  }
}

//se presente stampo che è possibile accedere, sennò che non è possibile
if (isPresent) {
  output.innerHTML = 'Puoi accedere!';
} else{
    output.innerHTML = "Ritenta, sarai più fortunato!";
}