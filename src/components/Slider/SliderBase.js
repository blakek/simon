import styled from 'styled-components'

export const SliderBase = styled.input`
  appearance: none;
  height: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: transparent;
  width: 100%;
  max-width: 30rem;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    height: .2rem;
    background-color: ${props => props.theme.main};
    cursor: pointer;
    border-radius: .2rem;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: ${props => props.theme.main};
    opacity: .7;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: -.4rem;
    transition: ${props => props.theme.componentHoverTransition};

    &:hover {
      opacity: 1;
      transform: scale(1.3);
    }
  }
`
