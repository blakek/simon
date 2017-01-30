import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0.2rem solid ${props => props.theme.componentColor};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.componentColor};
  padding: 1.2rem;
  font-size: 1em;
  transition: all 300ms ease;

  &:hover {
    background-color: ${props => props.theme.componentBackgroundColor};
    border-color: ${props => props.theme.componentHoverColor};
  }

  &:focus {
    outline: none;
  }
`

Button.defaultProps = {
  theme: {
    borderRadius: '0.3rem',
    color: '#ffffff',
    componentBackgroundColor: 'rgba(255, 255, 255, 0.05)',
    componentColor: 'rgba(255, 255, 255, 0.5)',
    componentHoverColor: 'rgba(255, 255, 255, 0.8)'
  }
}
