import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const container = {
  flex: 0,
  width: `100%`
}

export const textInputContainer = {
  backgroundColor: 'transparent',
  height: 40,
  width: `100%`,
  marginTop: 10,
  borderTopWidth: 0,
  borderBottomWidth: 0
}

export const textInput = {
  backgroundColor: theme.FOREGROUND_COLOR,
  color: '#5d5d5d',
  height: 40,
  borderRadius: 25,
  marginTop: 0,
  marginRight: 0,
  marginLeft: 0,
  marginBottom: 0,
  paddingLeft: 25,
  paddingRight: 25,
  fontSize: theme.FONT_MEDIUM,
  borderWidth: 1
}

export const DummyContainer = styled(TouchableOpacity)({
  height: 40,
  width: `100%`,
  marginTop: 10,
  borderWidth: 1,
  borderRadius: 20,
  borderColor: p => p.borderColor,
  backgroundColor: theme.FOREGROUND_COLOR
})

export const DummyInput = styled(Text)({
  color: theme.PRIMARY_COLOR,
  height: 40,
  padding: `9px 25px 11px 25px`,
  fontSize: theme.FONT_MEDIUM
})