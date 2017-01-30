import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0.2rem solid ${props => props.theme.componentColor};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.componentColor};
  padding: ${props => props.theme.componentPadding};
  font-size: 1em;
  transition: ${props => props.theme.componentHoverTransition};

  &:hover {
    background-color: ${props => props.theme.componentBackgroundColor};
    border-color: ${props => props.theme.componentHoverColor};
  }

  &:focus {
    outline: none;
  }
`
