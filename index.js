const path = require('path')
const Menubar = require('menubar')

const menubar = Menubar({
  dir: path.join(__dirname),
  backgroundColor: '#0001',
  height: 250,
  width: 425
})

menubar.on('after-create-window', () => {
  menubar.window.setVibrancy('ultra-dark')
})
