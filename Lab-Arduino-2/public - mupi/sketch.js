// Aqui se conecta el servidor
const NGROK = `${window.location.hostname}`;
let socket = io(NGROK, {
  path: '/real-time'
});
console.log('192.168.1.28', NGROK);

let led1On = '1'
let led1Off = '0'
let led2On = '2'
let led2Off = '3'

const ts = document.getElementById("toggle-switch");
ts.addEventListener("change", function(){
  if (ts.checked) {
    console.log('checked');
    socket.emit('paquete1', led1On)
  }else{
    socket.emit('paquete2', led1Off)
  }
  
})
const ts2 = document.getElementById("toggle-switch2");
ts2.addEventListener("change", function(){
  if (ts2.checked) {
    console.log('checked');
    socket.emit('paqueteled2on', led2On)
  }else{
    socket.emit('paqueteled2off', led2Off)
  }
  
})
