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
  setTimeout(() => kiitos.innerHTML = "", 5000);
  setTimeout(() => kiitos.classList.remove('kiitos'), 5000);
  postiSisalto.value = '';
  nimiSisalto.value = '';
  virhe.classList.remove('virhe');
  virhe.innerHTML = '';
  kiitos.classList.add('kiitos');
  nimiSisalto.style.borderColor = 'black';
  postiSisalto.style.borderColor = 'black';
  lahetysnappi.value = 'Lähetä';
}});
}