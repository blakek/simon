import React, { PropTypes } from 'react'
import { Slider } from 'components/Slider'

export const SpeechRateSlider = ({ onChange, value }) => (
  <Slider
    max={10}
    min={0.1}
    onChange={onChange}
    step={0.1}
    title="Speech Rate"
    value={value}
  />
)

SpeechRateSlider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default SpeechRateSlider
