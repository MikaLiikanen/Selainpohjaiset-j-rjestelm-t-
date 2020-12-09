
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();

   sendJSON();


});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsite.net/api/HttpTriggerCSarp1?code=lWOELqiU07AqsBvioQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("post", url, true);

  xhr,setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö",
    "EmailAddres": "mika-liikanen@hotmail.com",
    "EmailTo": "mika.liikanen@edu.salpaus.fi",
    "EmailName": "Teppo Tyyppi"
  });
  xhr.send(data);
}