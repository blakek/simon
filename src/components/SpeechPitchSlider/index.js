import React, { PropTypes } from 'react'
import { Slider } from 'components/Slider'

export const SpeechPitchSlider = ({ onChange, value }) => (
  <Slider
    max={2}
    min={0}
    onChange={onChange}
    step={0.1}
    title="Voice Pitch"
    value={value}
  />
)

SpeechPitchSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default SpeechPitchSlider
