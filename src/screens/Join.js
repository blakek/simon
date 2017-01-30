import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { ActionContainer } from 'components/ActionContainer'
import { Button } from 'components/Button'
import { GroupNameInput } from 'components/GroupNameInput'
import { UsernameInput } from 'components/UsernameInput'

const JoinContainer = styled.form`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > section {
    margin-bottom: 2.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

export const Join = ({ group, onGroupChanged, username, onUsernameChanged, onTryJoin }) => (
  <JoinContainer onSubmit={e => { e.preventDefault(); onTryJoin() }}>
    <GroupNameInput
      value={group}
      onChange={onGroupChanged}
    />

    <UsernameInput
      value={username}
      onChange={onUsernameChanged}
    />

    <ActionContainer>
      <Button type="submit">Let&rsquo;s go &rarr;</Button>
    </ActionContainer>
  </JoinContainer>
)

Join.propTypes = {
  group: PropTypes.string.isRequired,
  onGroupChanged: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onUsernameChanged: PropTypes.func.isRequired,
  onTryJoin: PropTypes.func.isRequired
}

export default Join
