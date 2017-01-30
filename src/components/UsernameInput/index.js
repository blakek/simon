import React, { PropTypes } from 'react'
import { TextInput } from 'components/TextInput'

export const UsernameInput = ({ onChange, value }) => (
  <TextInput
    onChange={onChange}
    title="Username"
    value={value}
  />
)

UsernameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}
