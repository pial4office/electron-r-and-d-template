const { app, BrowserWindow } = require('electron');
const path = require('path');

// 𝖈𝖔𝖓𝖋𝖎𝖌
const appConfig = {
  isDev: true,
  devURL: 'http://localhost:4000',
  prodURL: path.join(__dirname, './public/index.html'),
};

// 𝖆𝖕𝖕
function createWindow() {
  const appWindow = new BrowserWindow({ show: false });

  appWindow.maximize();

  appWindow.loadURL(appConfig.isDev ? appConfig.devURL : appConfig.prodURL);

  appConfig.isDev && appWindow.webContents.openDevTools();
}

// 𝖆𝖕𝖕 𝖑𝖎𝖘𝖙𝖊𝖓𝖊𝖗
app.whenReady().then(() => {
  createWindow();
});
