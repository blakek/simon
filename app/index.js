const path = require('path')
const Menubar = require('menubar')

const menubar = Menubar({
  dir: __dirname,
  icon: path.join(__dirname, 'resources/TrayIcon.png'),
  backgroundColor: '#0001',
  height: 250,
  width: 425
})

menubar.on('after-create-window', () => {
  menubar.window.setVibrancy('ultra-dark')
})
