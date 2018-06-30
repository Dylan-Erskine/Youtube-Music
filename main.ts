import { app, BrowserWindow, globalShortcut, WebviewTag } from 'electron';

function createWindow() {
  // Create the browser window.
  let window = new BrowserWindow({ width: 800, height: 600, icon:'logo-sm.png', backgroundColor: '#131313', frame: false });

  // and load the index.html of the app.
  window.loadFile('index.html');

  let pause = () => {
    window.webContents.executeJavaScript(`
      window.webview = document.getElementById('webview');
      window.webview.executeJavaScript(\`
      window.pauseButton = document.getElementsByClassName('play-pause-button')[0].firstChild;
      window.pauseButton.click()
      \`)
    `)
  }

  //#131313
  let previous = () => {
    window.webContents.executeJavaScript(`
      window.webview = document.getElementById('webview');
      window.webview.executeJavaScript(\`
      window.pauseButton = document.getElementsByClassName('previous-button')[0].firstChild;
      window.pauseButton.click()
      \`)
    `)
  }

  let next = () => {
    window.webContents.executeJavaScript(`
      window.webview = document.getElementById('webview');
      window.webview.executeJavaScript(\`
      window.pauseButton = document.getElementsByClassName('next-button')[0].firstChild;
      window.pauseButton.click()
      \`)
    `)
  }

  globalShortcut.register('MediaPlayPause', () => {
    pause();
  })

  globalShortcut.register('MediaPreviousTrack', () => {
    previous();
  })

  globalShortcut.register('MediaNextTrack', () => {
    next();
  })

  app.on('window-all-closed', () => {
    app.quit();
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

app.on('ready', createWindow);
// webview.executeJavaScript(\`
// let buttons = document.getElementsByClassName('style-scope paper-icon-button');
// console.log(buttons);
// \`)