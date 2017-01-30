import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  appearance: none;
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.05);
  border-style: none none solid none;
  border-width: .2rem;
  box-sizing: border-box;
  color: ${props => props.theme.color};
  min-width: 30rem;
  font-size: 1em;
  transition: ${props => props.theme.componentHoverTransition};

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.main};
  }
`

export const TextInputBase = ({ onChange, value, ...props }) => (
  <StyledInput
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    {...props}
  />
)

TextInputBase.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}
