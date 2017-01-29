import styled from 'styled-components'

export const Label = styled.label`
  flex: 1;
  color: ${props => props.theme.color};
  text-align: right;
`

Label.defaultProps = {
  theme: {
    color: '#ffffff'
  }
}
