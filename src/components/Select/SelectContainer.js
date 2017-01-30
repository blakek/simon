import styled from 'styled-components'

export const SelectContainer = styled.span`
  box-sizing: border-box;
  position: relative;

  &::after {
    box-sizing: border-box;
    content: '';
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    border-color: ${props => props.theme.componentColor};
    border-style: none solid solid none;
    transition: ${props => props.theme.componentHoverTransition};
    transform: rotate(45deg);
  }

  &:hover {
    &::after {
      border-color: ${props => props.theme.componentHoverColor};
    }
  }
`
