const path = require('path')
const Menubar = require('menubar')

const menubar = Menubar({
  dir: path.join(__dirname),
  backgroundColor: '#0001',
  height: 265,
  width: 525
})

menubar.on('after-create-window', () => {
  menubar.window.setVibrancy('ultra-dark')
})
