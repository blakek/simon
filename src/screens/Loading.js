import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.section`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const Loading = () => (
  <LoadingContainer>
    <h1>Loading...</h1>
  </LoadingContainer>
)
