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

const news = document.getElementById('#COVID')

getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data) {

  if (err != null) {
    console.error(err);
  } else{
    var date = data.lastUpdatedAtApify;
    console.log(`Koronavirus ${date.split('T')[0]}`);
    var infected = data.infected;
    console.log(`Tartuntoja: ${infected}`);
    var tested = data.tested;
    console.log(`Testattuja: ${tested}`);
    var dead = data.deaths;
    console.log(`Kuolleita: ${dead}`);

    document.getElementById("paivam").innerHTML = `Koronavirus suomessa ${date.split('T')[0]}`
    document.getElementById("tartunta").innerHTML = `Tartuntoja: ${infected}`
    document.getElementById("testattu").innerHTML = `Testattuja: ${tested}`
    document.getElementById("kuollut").innerHTML = `Kuolleita: ${dead}`
  }
});