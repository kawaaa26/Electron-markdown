// show current preload status on console
console.log("js/webview.js was loaded");

const {ipcRenderer} = require('electron');

// ipc stands for... "Inter Process Communication" (b/w MainProcess and RenderProcees)
// there also is an "ipcMain"
ipcRenderer.on('update-markdown', (event, markdown) => {
  let source = document.getElementById('source');

  source.innerHTML = markdown;
  slideshow.loadFromString(source.innerHTML);
});
