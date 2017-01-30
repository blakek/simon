import React, { PropTypes } from 'react'
import { TextInputBase } from './TextInputBase'
import { Container, Label, Setting } from 'components/SettingsContainer'

export const TextInput = ({ title, ...props }) => (
  <Container>
    <Label>{title}</Label>

    <Setting>
      <TextInputBase {...props} />
    </Setting>
  </Container>
)

TextInput.propTypes = {
  title: PropTypes.string.isRequired
}
