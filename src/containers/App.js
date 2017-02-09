import React, { Component } from 'react'
import { init as apiInit, join, say } from 'lib/api'
import { Join } from 'screens/Join'
import { Loading } from 'screens/Loading'
import { Send } from 'screens/Send'
import json5 from 'json5'

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
    // set voice list when list is loaded
    speechSynthesis.addEventListener('voiceschanged', () => {
      this.setState({
        voice: speechSynthesis.getVoices().find(voice => voice.default),
        voices: speechSynthesis.getVoices()
      })
    })

    apiInit({
      onJoined: () => this.setState({ hasJoinedGroup: true }),
      onSpeak: ({ data }) => this.speak(data)
    })
  }

  // Thinnest wrapper around speechSynthesis
  speak({ pitch = 1, rate = 1, text = '', voice = null, voiceName = '' }) {
    const textParts = this.splitText(pitch, rate, text, voice, voiceName)
    textParts.forEach(p => {
      const utterance = new SpeechSynthesisUtterance(p.text)

      utterance.pitch = p.pitch
      utterance.rate = p.rate
      utterance.voice = p.voice ||
        this.state.voices.find(voice => voice.name === p.voiceName) ||
        this.state.voices.find(voice => voice.default)

      speechSynthesis.speak(utterance)
    })
  }

  splitText(pitch = 1, rate = 1, text = '', voice = null, voiceName = '') {
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

  // Speak with pitch, rate, voice, and text currently set in state
  speakTest(text) {
    this.speak({
      pitch: this.state.speechPitch,
      rate: this.state.speechRate,
      text,
      voice: this.state.voice
    })
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
