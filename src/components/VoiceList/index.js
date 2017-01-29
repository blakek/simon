import React, { PropTypes } from 'react'
import { Container, Label, Setting } from 'components/SettingsContainer'

export const VoiceList = ({ onChange, voices }) => (
  <Container>
    <Label>Voice</Label>

    <Setting>
      <select onChange={e => { onChange(voices[e.target.value]) }}>
        {voices.map((voice, index) => (
          <option key={index} value={index}>{voice.name}</option>
        ))}
      </select>
    </Setting>
  </Container>
)

VoiceList.propTypes = {
  onChange: PropTypes.func,
  voices: PropTypes.array.isRequired
}

export default VoiceList
