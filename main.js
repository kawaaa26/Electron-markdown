// load references to app and BrowserWindow
const { app, BrowserWindow } = require('electron');

// a variable for controlling window
let win;

// function which create mainWindow

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(`file://${__dirname}/mainWindow.html`);
  win.on('closed', () => { win = null; });
}

// create the mainWindow when the app is ready
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
