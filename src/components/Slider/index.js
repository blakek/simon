import React, { PropTypes } from 'react'

export const Slider = ({ max, min, onChange, step, value }) => (
  <input
    max={max}
    min={min}
    step={step}
    type="range"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
)

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  value: PropTypes.number
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1
}

export default Slider
