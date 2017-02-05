import React, { PropTypes } from 'react'
import { SliderBase } from './SliderBase'
import { Container, Label, Setting } from 'components/SettingsContainer'

export const Slider = ({ max, min, onChange, step, title, value }) => (
  <Container>
    <Label>{title}</Label>

    <Setting>
      <SliderBase
        max={max}
        min={min}
        step={step}
        type="range"
        value={value}
        onChange={e => onChange(Number(e.target.value))}
      />
    </Setting>
  </Container>
)

Slider.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
  title: PropTypes.string,
  value: PropTypes.number
}

Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1
}

export default Slider
