import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { ActionContainer } from 'components/ActionContainer'
import { Button } from 'components/Button'
import { SpeechPitchSlider } from 'components/SpeechPitchSlider'
import { SpeechRateSlider } from 'components/SpeechRateSlider'
import { TextArea } from 'components/TextArea'
import { VoiceList } from 'components/VoiceList'

const AppContainer = styled.section`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
`

export const Send = ({
  text,
  onTextChanged,
  voices,
  onVoiceChanged,
  speechRate,
  onSpeechRateChanged,
  speechPitch,
  onSpeechPitchChanged,
  group,
  onGroupChanged,
  testSpeech
}) => (
  <AppContainer>
    <TextArea
      maxRows={5}
      placeholder="Say something&hellip;"
      value={text}
      onChange={onTextChanged}
    />

    <VoiceList
      voices={voices}
      onChange={onVoiceChanged}
    />

    <SpeechRateSlider
      value={speechRate}
      onChange={onSpeechRateChanged}
    />

    <SpeechPitchSlider
      value={speechPitch}
      onChange={onSpeechPitchChanged}
    />

    <ActionContainer>
      <Button onClick={testSpeech}>Test</Button>
    </ActionContainer>
  </AppContainer>
)

Send.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChanged: PropTypes.func.isRequired,
  voices: PropTypes.array.isRequired,
  onVoiceChanged: PropTypes.func.isRequired,
  speechRate: PropTypes.number.isRequired,
  onSpeechRateChanged: PropTypes.func.isRequired,
  speechPitch: PropTypes.number.isRequired,
  onSpeechPitchChanged: PropTypes.func.isRequired,
  group: PropTypes.string.isRequired,
  onGroupChanged: PropTypes.func.isRequired,
  testSpeech: PropTypes.func.isRequired
}

export default Send
