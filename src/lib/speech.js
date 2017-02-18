import json5 from 'json5'

export const getVoices = () => {
  return new Promise((resolve, reject) => {
    speechSynthesis.addEventListener('voiceschanged', () => {
      const voices = speechSynthesis.getVoices()
      resolve({
        voice: voices.find(voice => voice.default),
        voices
      })
    })
  })
}

export const speak = (options, voices) => {
  const textParts = splitText(options)
  textParts.forEach(p => {
    const utterance = new SpeechSynthesisUtterance(p.text)

    utterance.pitch = p.pitch
    utterance.rate = p.rate
    utterance.voice = p.voice ||
      voices.find(voice => voice.name === p.voiceName) ||
      voices.find(voice => voice.default)

    speechSynthesis.speak(utterance)
  })
}

const splitText = ({pitch = 1, rate = 1, text = '', voice = null, voiceName = ''}) => {
  const textParts = text.split('{{')
  return textParts.map(t => {
    if (t.indexOf('}}') >= 0) {
      const parts = t.split('}}')
      const settings = json5.parse(`{${parts[0]}}`)
      return {
        pitch: settings.pitch || settings.p || pitch,
        rate: settings.rate || settings.r || rate,
        text: parts[1],
        voiceName: settings.voice || settings.v || voiceName
      }
    }
    return {
      pitch,
      rate,
      text: t,
      voice,
      voiceName
    }
  })
}
