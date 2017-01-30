import React, { PropTypes } from 'react'
import { TextInput } from 'components/TextInput'

export const GroupNameInput = ({ onChange, value }) => (
  <TextInput
    onChange={onChange}
    title="Group Name"
    value={value}
  />
)

GroupNameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}
