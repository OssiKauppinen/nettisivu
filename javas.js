function naytaValikko() {
var valikko = document.getElementById("valinta");
if (valikko.style.display === "none") {
    valikko.style.display = "block";
} else {
    valikko.style.display = "none";
}
}

function darkMode() {
   var element = document.body;
   var valikko = document.getElementById("valinta");
   element.classList.toggle("dark-mode");
   valikko.style.display = "none";
}

function rainbowMode() {
   var element = document.body;
   var valikko = document.getElementById("valinta");
   element.classList.toggle("rainbow-mode");
   valikko.style.display = "none";
}

const lahetysnappi = document.querySelector('#laheta');
const nimiSisalto = document.querySelector('#nimi');
const postiSisalto = document.querySelector('#sposti');
const virhe = document.querySelector('.virheilmoitus');
const kiitos = document.querySelector('.kiitosilmoitus');


lahetysnappi.addEventListener('click', e =>{
  e.preventDefault();

  if(nimiSisalto.value === '' || postiSisalto.value === ''){
    virhe.classList.add('virhe');
    virhe.innerHTML = 'Täytä kaikki pakolliset kentät';
    nimiSisalto.style.borderColor = 'red';
    postiSisalto.style.borderColor = 'red';
  }else{
  sendJSON();
  console.log("sent here");
  kiitos.innerHTML = (`Kiitos yhteydenotostasi ${nimiSisalto.value}`);
  setTimeout(() => kiitos.innerHTML = "", 30000);
  setTimeout(() => kiitos.classList.remove('kiitos'), 30000);
  postiSisalto.value = '';
  nimiSisalto.value = '';
  virhe.classList.remove('virhe');
  virhe.innerHTML = '';
  kiitos.classList.add('kiitos');
  nimiSisalto.style.borderColor = 'black';
  postiSisalto.style.borderColor = 'black';
  lahetysnappi.value = 'Lähetä';
  lahetysnappi.disabled = true;
  setTimeout(() => lahetysnappi.disabled = false, 30000);
}});

function sendJSON(){
  const nimiKentta = document.querySelector('#nimi').value;
  const emailKentta = document.querySelector('#sposti').value;
  const viestiKentta = document.querySelector('#textarea').value;
  const numeroKentta = document.querySelector('#num').value;
  const ikaKentta = document.querySelector('#age').value;
  const syntymaKentta = document.querySelector('#dateofbirth').value;
  const yhteydenottoKentta = document.querySelector('#yhteys').value;
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  console.log('---------------');
  console.log('Viesti: ' + viestiKentta);
   console.log('---------------');
  console.log('Nimi: ' + nimiKentta);
  var data = JSON.stringify({
    "EmailMsg": 'VIESTI: ' + viestiKentta + " SÄHKÖPOSTI: " + emailKentta, // Kirjoittaa spostin sisällön
    "EmailTo": "Ossi.Kauppinen", // Oma spostini
    "EmailName": nimiKentta // Nimikentän sisältö
  });
  xhr.send(data);
};