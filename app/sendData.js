function postBet(bet) {
var createorsaveUrl = "https://blap-johorst.c9users.io/setzen";
var y = new XMLHttpRequest();
y.open('POST', createorsaveUrl);
y.responseType = 'json';
y.contentType = 'application/json';
y.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
y.onload = function(){window.mystatus = "Aktion POST " + this.name + " erfolgreich";
console.log(y.response)};;
y.error = function(){window.mystatus = "Aktion POST NICHT erfolgreich"};
y.send(JSON.stringify(bet));
//console.log(bet);
}