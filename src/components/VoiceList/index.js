import React, { PropTypes } from 'react'

export const VoiceList = ({ onChange, voices }) => (
  <select onChange={e => { onChange(voices[e.target.value]) }}>
    {voices.map((voice, index) => (
      <option key={index} value={index}>{voice.name}</option>
    ))}
  </select>
)

VoiceList.propTypes = {
  onChange: PropTypes.func,
  voices: PropTypes.array.isRequired
}

export default VoiceList
