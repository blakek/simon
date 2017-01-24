import React, { Component } from 'react'
import { SpeechPitchSlider } from 'components/SpeechPitchSlider'
import { SpeechRateSlider } from 'components/SpeechRateSlider'
import { TextInput } from 'components/TextInput'
import { VoiceList } from 'components/VoiceList'

const containerStyle = {
  display: 'flex',
  flex: 1,
  flexFlow: 'column wrap'
}

export class App extends Component {
  constructor() {
    super()

    this.state = {
      pitch: 1,
      rate: 1,
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
    utterance.pitch = this.state.pitch
    utterance.rate = this.state.rate
    utterance.voice = this.state.voice

    speechSynthesis.speak(utterance)
  }

  render() {
    return (
      <div style={containerStyle}>
        <TextInput
          maxRows={5}
          value={this.state.text}
          onChange={text => this.setState({ text })}
        />

        <VoiceList
          voices={this.state.voices}
          onChange={voice => this.setState({ voice })}
        />

        <SpeechRateSlider
          value={this.state.rate}
          onChange={rate => this.setState({ rate })}
        />

        <SpeechPitchSlider
          value={this.state.pitch}
          onChange={pitch => this.setState({ pitch })}
        />

        <button onClick={() => this.speakText()}>Test</button>
      </div>
    )
  }
}

export default App
