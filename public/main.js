'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var ipc = require('ipc');

ipc.on('close-main-window', function () {
    app.quit();
});

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1360
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
});