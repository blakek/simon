import React, { PropTypes } from 'react'
import { Container, Label, Setting } from 'components/SettingsContainer'
import { Select } from 'components/Select'

export const VoiceList = ({ onChange, voices }) => (
  <Container>
    <Label>Voice</Label>

    <Setting>
      <Select onChange={e => { onChange(voices[e.target.value]) }}>
        {voices.map((voice, index) => (
          <option key={index} value={index}>{voice.name}</option>
        ))}
      </Select>
    </Setting>
  </Container>
)

VoiceList.propTypes = {
  onChange: PropTypes.func,
  voices: PropTypes.array.isRequired
}

export default VoiceList
