// editor initialization
// commonJS module. may converted to ES6 for current version. just ignore for the time
// importing needed libr// for those requiresries for those requires
require('ace-min-noconflict');
require('ace-min-noconflict/mode-markdown');

// "ace" perhaps is enabled by above requires.
var editor = ace.edit("editor");

// set Markdown for sytax highlight, suggestions, and auto-completion here
editor.getSession().setMode("ace/mode/markdown");

// fold lines for longer lines.
editor.getSession().setUseWrapMode(true);

// give a focus on the editor.
editor.focus();

// open developer tools when DEBUG_GUEST=true.
var webveiw = document.getElementById('webview');

if (process.env.DEBUG_GUEST) {
  webview.addEventListener('dom-ready', () => {
    webview.openDevTools()
  });
}
