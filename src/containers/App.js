import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'lib/themes'
import { Send } from 'screens/Send'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      group: '',
      speechPitch: 1,
      speechRate: 1,
      text: '',
      voice: null,
      voices: []
    }
  }

  componentWillMount() {
    speechSynthesis.addEventListener('voiceschanged', () => {
      this.setState({ voices: speechSynthesis.getVoices() })
    })
  }

  speakText() {
    const utterance = new SpeechSynthesisUtterance(this.state.text)
    utterance.pitch = this.state.speechPitch
    utterance.rate = this.state.speechRate
    utterance.voice = this.state.voice

    speechSynthesis.speak(utterance)
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Send
          onTextChanged={text => this.setState({ text })}
          onVoiceChanged={voice => this.setState({ voice })}
          onSpeechRateChanged={speechRate => this.setState({ speechRate })}
          onSpeechPitchChanged={speechPitch => this.setState({ speechPitch })}
          onGroupChanged={group => this.setState({ group })}
          testSpeech={() => this.speakText()}
          {...this.state}
        />
      </ThemeProvider>
    )
  }
}

export default App
