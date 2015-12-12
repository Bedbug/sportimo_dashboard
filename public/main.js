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
        height: 990,
        width: 1440
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
});