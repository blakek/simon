import React, { PropTypes } from 'react'
import styled from 'styled-components'

const getRowCount = (textValue, maxLines) => {
  if (textValue == null) return 1

  const lineCount = Math.max(
    textValue.split('\n').length,
    textValue.length / 40
  )

  if (maxLines == null || maxLines < 1) return lineCount

  return Math.min(lineCount, maxLines)
}

const StyledTextarea = styled.textarea`
  appearance: none;
  background-color: transparent;
  border: .2rem solid rgba(255, 255, 255, .05);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 2rem 2rem;
  font-size: 1.4rem;
  border-radius: .2rem;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::-webkit-resizer {
    display: none;
  }
`

export const TextArea = ({ onChange, maxRows, value, ...props }) => (
  <StyledTextarea
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{ width: '100%' }}
    rows={getRowCount(value, maxRows)}
    {...props}
  />
)

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxRows: PropTypes.number,
  value: PropTypes.string
}

export default TextArea
