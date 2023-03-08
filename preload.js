// este nos servira para controlar la interface del proyecto
const {ipcRenderer, contextBridge}=require('electron')

contextBridge.exposeInMainWorld(//esto permite obtener estas funciones en el mainword, que es index.js
    'comunicacion',
    {
        registroValido: (datos)=> ipcRenderer.send('registroValido',datos)//aca ejecutamos el metodo y se envia el resultado
        //a main.js
        ,
        inicioCorrecto: (callback)=> ipcRenderer.on('inicioCorrecto',callback)
    }
)