const { BrowserWindow, ipcMain, app } = require("electron")
const bookmark = (top) => {
	const win = new BrowserWindow({
		webPreferences: {
			contextIsolation: false,
			nodeIntegration: true
		},
		parent: top,
		modal: true,
		show: false,
		width: 500,
		height: 300,
		title: 'Solak Browser',
		icon: 'https://res.cloudinary.com/daniel23/image/upload/v1683806022/logo_fucblf.jpg'
	})

	win.maximizable = false;
	win.minimizable = false;
	win.resizable = false;

	//win.webContents.openDevTools()

	win.loadFile('views/bookmark.html')
	win.once("ready-to-show", () => {
		win.show()
		win.focus()
	})
}

module.exports = bookmark
