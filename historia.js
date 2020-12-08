var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    
    xhr.onload = function() {
    
        var status = xhr.status;
        
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
};


getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1', function(err, data){
  let taulukko = `<table>`;
  const historia = data.map(function(paiva){
    //var date = data.lastUpdatedAtApify;
    //console.log(`Koronavirus ${date.split('T')[0]}`);
    if(paiva.confirmedCases != undefined){
      taulukko = taulukko + `<tr><td>${(paiva.lastUpdatedAtApify).split('T')[0]}</td><td>Tapauksia:</td><td>${paiva.confirmedCases}</td></tr>`; 
    }
    else if(paiva.testedCases != undefined){
      taulukko = taulukko + `<tr><td>${(paiva.lastUpdatedAtApify).split('T')[0]}</td><td>Testattuja:</td><td>${paiva.testedCases}</td></tr>`; 
    }
    else if(paiva.infected != undefined && paiva.lastUpdatedAtApify != undefined){
      taulukko = taulukko + `<tr><td>${(paiva.lastUpdatedAtApify).split('T')[0]}</td><td>Tartuntoja:</td><td>${paiva.infected}</td></tr>`; 
    }
    else{
      taulukko = taulukko + `<tr><td>Ei dataa</td><td>Ei dataa</td><td>Ei dataa</td></tr>`; 
    }
  });
  taulukko = taulukko + `</table>`;
  document.body.innerHTML = taulukko;
});
