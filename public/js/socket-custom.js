 var socket = io();

 // escuchar
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 socket.on('disconnect', function() {
     console.log('Perdimos conexión con el servidor');
 });

 socket.on('enviarMensaje', function(mensaje) {
     console.log(mensaje);
 });

 // Enviar información
 socket.emit('enviarMensaje', {
     usuario: 'César',
     mensaje: 'Hola Mundo'
 }, function(resp) {
     console.log('Respuesta server:', resp);
 });