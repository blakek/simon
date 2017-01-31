const websocket = new window.WebSocket('ws://10.0.0.5:3000')

export function init(config) {
  return new Promise((resolve) => {
    websocket.onopen = resolve
    websocket.onmessage = parseMessage(config)
    websocket.onerror = showError
  })
}

export function join({ group, username }) {
  transmit({
    group,
    username,
    message: 'join'
  })
}

const parseMessage = ({ onJoin, onSpeak }) => ({ data }) => {
  const transmission = JSON.parse(data)

  if (transmission.message === 'say') {
    onSpeak(transmission.text)
  } else if (transmission.message === 'join') {
    onJoin(transmission.message)
  } else if (/error/.test(transmission.message)) {
    // TODO: handle specific error messages
    console.error(transmission.message)
  }
}

export function part({ group, username }) {
  transmit({
    group,
    username,
    message: 'part'
  })
}

export function say({ from, to, text }) {
  debugger
  transmit({
    from,
    to,
    text,
    message: 'send'
  })
}

function showError(error) {
  // TODO: handle specific error messages
  console.error(error.data)
}

export function transmit(message) {
  const transmission = JSON.stringify(message)
  websocket.send(transmission)
}

export function yell(from, to, text) {
  transmit({
    from,
    to,
    text,
    message: 'yell'
  })
}
