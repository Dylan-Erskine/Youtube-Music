# Youtube-Music
Electron Desktop app

## Building project
Download electron binary from https://github.com/electron/electron/releases/download/v2.0.3/electron-v2.0.3-win32-x64.zip

1. Copy all contents of the base directory into resources/app.

2. Change the Youtube Music shortcut to the location of the electron build, or make a new one with the icon.ico file.

3. Copy shortcut to C:\ProgramData\Microsoft\Windows\Start Menu\Programs

4. Open from start menu.

## Dev on this project

1. Youd don't want to do this, but if you do install node, npm install in project directory, and npm start which will compile the typescript and start the program. Look in tsconfig for other buildlike commands.
