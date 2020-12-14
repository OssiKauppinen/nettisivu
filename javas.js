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

window.onload=function(){
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
}
const nimiKentta = document.querySelector('#nimi');
const emailKentta = document.querySelector('#sposti');
const viestiKentta = document.querySelector('textarea');
const numeroKentta = document.querySelector('#num');
const ikaKentta = document.querySelector('#age');
const syntymaKentta = document.querySelector('#dateofbirth');
const yhteydenottoKentta = document.querySelector('#yhteys');

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);
  
  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.satus === 200){
      console.log("Valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": `${viestiKentta}`, // Kirjoittaa spostin sisällön
    "EmailAddress": `${emailKentta}`, // Viestin kirjoittajan sposti
    "EmailTo": "ossi.o.kauppinen@gmail.com", // Oma spostini
    "EmailName": `${nimiKentta}` // Nimikentän sisältö
  });
  xhr.send(data);
};