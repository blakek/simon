import React, { Component } from 'react'
import { init as apiInit, join, say } from 'lib/api'
import { getVoices, speak } from 'lib/speech'
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
    // set voice list
    getVoices().then(({voice, voices}) => {
      this.setState({
        voice,
        voices
      })
    })

    apiInit({
      onJoined: () => this.setState({ hasJoinedGroup: true }),
      onSpeak: ({ data }) => speak(data, this.state.voices)
    })
  }

  // Speak with pitch, rate, voice, and text currently set in state
  speakTest(text) {
    speak({
      pitch: this.state.speechPitch,
      rate: this.state.speechRate,
      text,
      voice: this.state.voice
    }, this.state.voices)
  }

  // Send a message to another user
  sendMessage() {
    say({
      from: { group: this.state.group, username: this.state.username },
      to: { group: this.state.group, username: this.state.chosenRecipient },
      data: {
        pitch: this.state.speechPitch,
        rate: this.state.speechRate,
        text: this.state.text,
        voiceName: this.state.voice.name
      }
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else if (this.state.hasJoinedGroup) {
      return (
        <Send
          onChosenRecipientChanged={chosenRecipient => this.setState({ chosenRecipient })}
          onTextChanged={text => this.setState({ text })}
          onVoiceChanged={voice => this.setState({ voice })}
          onSay={() => this.sendMessage()}
          onSpeechRateChanged={speechRate => this.setState({ speechRate })}
          onSpeechPitchChanged={speechPitch => this.setState({ speechPitch })}
          testSpeech={() => this.speakTest(this.state.text)}
          {...this.state}
        />
      )
    } else {
      return (
        <Join
          group={this.state.group}
          username={this.state.username}
          onGroupChanged={group => this.setState({ group })}
          onUsernameChanged={username => this.setState({ username })}
          onTryJoin={() => join({ group: this.state.group, username: this.state.username })}
        />
      )
    }
  }
}

export default App
