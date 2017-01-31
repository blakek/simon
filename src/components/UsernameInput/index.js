import React, { PropTypes } from 'react'
import { TextInput } from 'components/TextInput'

export const UsernameInput = ({ onChange, title, value }) => (
  <TextInput
    onChange={onChange}
    title={title}
    value={value}
  />
)

UsernameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string
}

UsernameInput.defaultProps = {
  title: 'Username'
}
