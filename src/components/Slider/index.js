import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  appearance: none;
  height: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  opacity: .8;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: .2rem;
    background-color: skyblue;
    cursor: pointer;
    border-radius: 1.3px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: skyblue;
    opacity: .7;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: -.4rem;

    &:hover {
      opacity: .85;
      transform: scale(1.3);
    }
  }
`

export const Slider = ({ max, min, onChange, step, value }) => (
  <Input
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
