const path = require('path')
const Menubar = require('menubar')

const menubar = Menubar({
  dir: path.join(__dirname)
})

menubar.on('after-create-window', () => {
  menubar.window.setVibrancy('ultra-dark')
})
