import React, { PropTypes } from 'react'

const getRowCount = (textValue, maxLines) => {
  if (textValue == null) return 1

  const lineCount = Math.max(
    textValue.split('\n').length,
    textValue.length / 40
  )

  if (maxLines == null || maxLines < 1) return lineCount

  return Math.min(lineCount, maxLines)
}

export const TextInput = ({ onChange, maxRows, value }) => (
  <textarea
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    style={{ width: '100%' }}
    rows={getRowCount(value, maxRows)}
  />
)

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxRows: PropTypes.number,
  value: PropTypes.string
}

export default TextInput
