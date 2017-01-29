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
    border-radius: 1.3px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background-color: ${props => props.theme.main};
    opacity: .7;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    margin-top: -.4rem;
    transition: transform 300ms ease, opacity 300ms ease;

    &:hover {
      opacity: 1;
      transform: scale(1.3);
    }
  }
`

SliderBase.defaultProps = {
  theme: {
    main: 'rgba(126, 192, 238, 0.8)'
  }
}
