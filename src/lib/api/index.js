import io from 'socket.io-client'
const socket = io('ws://10.0.0.5:3000', { transports: ['websocket'], upgrade: false })

export function init(config) {
  return new Promise((resolve, reject) => {
    socket.on('joined', config.onJoined)
    socket.on('say', config.onSpeak)
    socket.on('simon-error', config.onError)
    socket.on('users', config.onUserList)

    socket.on('connect', resolve)
    socket.on('connect_error', reject)
  })
}

export function join({ group, username }) {
  socket.emit('join', {
    group,
    username
  })
}

export function list({ group }) {
  socket.emit('list')
}

export function part({ group, username }) {
  socket.emit('part', {
    username,
    group
  })
}

export function say({ from, to, data }) {
  socket.emit('send', {
    from,
    to,
    data
  })
}

export function yell(from, to, data) {
  socket.emit('yell', {
    from,
    to,
    data
  })
}
