import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { init as apiInit, join, say } from 'lib/api'
import { defaultTheme } from 'lib/themes'
import { Join } from 'screens/Join'
import { Loading } from 'screens/Loading'
import { Send } from 'screens/Send'

export class App extends Component {
  constructor() {
    super()

    this.state = {
      chosenRecipient: null,
      group: '',
      hasJoinedGroup: false,
      isLoading: false,
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

    apiInit({
      onJoin: () => this.setState({ hasJoinedGroup: true }),
      onSpeak: text => this.speakText(text)
    })
  }

  speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.pitch = this.state.speechPitch
    utterance.rate = this.state.speechRate
    utterance.voice = this.state.voice

    speechSynthesis.speak(utterance)
  }

  sendMessage() {
    say({
      from: { group: this.state.group, username: this.state.username },
      to: { group: this.state.group, username: this.state.chosenRecipient },
      text: this.state.text
    })
  }

  render() {
    const sendScreen = (
      <Send
        onChosenRecipientChanged={chosenRecipient => this.setState({ chosenRecipient })}
        onTextChanged={text => this.setState({ text })}
        onVoiceChanged={voice => this.setState({ voice })}
        onSay={() => this.sendMessage()}
        onSpeechRateChanged={speechRate => this.setState({ speechRate })}
        onSpeechPitchChanged={speechPitch => this.setState({ speechPitch })}
        testSpeech={() => this.speakText(this.state.text)}
        {...this.state}
      />
    )

    const joinScreen = (
      <Join
        group={this.state.group}
        username={this.state.username}
        onGroupChanged={group => this.setState({ group })}
        onUsernameChanged={username => this.setState({ username })}
        onTryJoin={() => join({ group: this.state.group, username: this.state.username })}
      />
    )

    return (
      <ThemeProvider theme={defaultTheme}>
        {do {
          if (this.state.isLoading) { <Loading /> }
          else if (this.state.hasJoinedGroup) { sendScreen }
          else joinScreen
        }}
      </ThemeProvider>
    )
  }
}

export default App
