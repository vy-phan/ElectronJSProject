
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWin() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        },
        resizable: false,
        icon: path.join(__dirname, './images/icon.svg')
    });
    win.loadFile('index.html');
}

app.on('ready', createWin);
