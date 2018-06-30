"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function createWindow() {
    // Create the browser window.
    var window = new electron_1.BrowserWindow({ width: 800, height: 600, icon: 'logo-sm.png', backgroundColor: '#131313', frame: false });
    // and load the index.html of the app.
    window.loadFile('index.html');
    var pause = function () {
        window.webContents.executeJavaScript("\n      window.webview = document.getElementById('webview');\n      window.webview.executeJavaScript(`\n      window.pauseButton = document.getElementsByClassName('play-pause-button')[0].firstChild;\n      window.pauseButton.click()\n      `)\n    ");
    };
    //#131313
    var previous = function () {
        window.webContents.executeJavaScript("\n      window.webview = document.getElementById('webview');\n      window.webview.executeJavaScript(`\n      window.pauseButton = document.getElementsByClassName('previous-button')[0].firstChild;\n      window.pauseButton.click()\n      `)\n    ");
    };
    var next = function () {
        window.webContents.executeJavaScript("\n      window.webview = document.getElementById('webview');\n      window.webview.executeJavaScript(`\n      window.pauseButton = document.getElementsByClassName('next-button')[0].firstChild;\n      window.pauseButton.click()\n      `)\n    ");
    };
    electron_1.globalShortcut.register('MediaPlayPause', function () {
        pause();
    });
    electron_1.globalShortcut.register('MediaPreviousTrack', function () {
        previous();
    });
    electron_1.globalShortcut.register('MediaNextTrack', function () {
        next();
    });
    electron_1.app.on('window-all-closed', function () {
        electron_1.app.quit();
    });
    // win.webContents.on('did-finish-load', () => {
    //   Rxjs.timer(10000).subscribe(r => {
    //     pause();
    //     // Rxjs.timer(5000, 5000).subscribe(r => {
    //     //   win.webContents.executeJavaScript(`
    //     //   console.log('deep');
    //     //   webview.executeJavaScript(\`
    //     //   window.pauseButton.click();
    //     //   \`)
    //     // `)
    //     // })
    //   })
    // });
}
electron_1.app.on('ready', createWindow);
// webview.executeJavaScript(\`
// let buttons = document.getElementsByClassName('style-scope paper-icon-button');
// console.log(buttons);
// \`)
