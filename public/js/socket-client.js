

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');
 

const socket = io();


socket.on('connect', ()=>{

    console.log('conectado')

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

})

socket.on('disconnect', ()=>{
    console.log('desconectado');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});
socket.on('enviar-mensaje', (payload)=>{
    console.log('mensaje recibido ', payload)
});

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        id: "b87f2387f2",
        msg: mensaje,
        fecha: new Date()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server ', id)
    });
})