const {app, BrowserWindow, ipcMain}=require('electron');

const path= require('path')

let ventana;//se deja aca para usarlo despues, antes estaba como const en la funcion de abajo

function createWindow(){
    ventana = new BrowserWindow({
        width: 400,
        height: 300,
        webPreferences:{//nos permite accede a funciones nod, en este caso para interface de comunicacion
            preload: path.join(app.getAppPath(),'preload.js')
        },
    })
    ventana.loadFile('index.html')
}
app.whenReady().then(createWindow)