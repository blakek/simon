import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'lib/themes'
import { Join } from 'screens/Join'
import { Send } from 'screens/Send'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      group: '',
      hasJoinedGroup: false,
      speechPitch: 1,
      speechRate: 1,
      text: '',
      username: '',
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
    const sendScreen = (
      <Send
        onTextChanged={text => this.setState({ text })}
        onVoiceChanged={voice => this.setState({ voice })}
        onSpeechRateChanged={speechRate => this.setState({ speechRate })}
        onSpeechPitchChanged={speechPitch => this.setState({ speechPitch })}
        testSpeech={() => this.speakText()}
        {...this.state}
      />
    )

    const joinScreen = (
      <Join
        group={this.state.group}
        username={this.state.username}
        onGroupChanged={group => this.setState({ group })}
        onUsernameChanged={username => this.setState({ username })}
        onTryJoin={() => this.setState({ hasJoinedGroup: true })}
      />
    )

    return (
      <ThemeProvider theme={defaultTheme}>
        {
          this.state.hasJoinedGroup
          ? sendScreen
          : joinScreen
        }
      </ThemeProvider>
    )
  }
}

export default App
