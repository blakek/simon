import React from 'react'
import { SelectBase } from './SelectBase'
import { SelectContainer } from './SelectContainer'

export const Select = (props) => (
  <SelectContainer>
    <SelectBase {...props} />
  </SelectContainer>
)
