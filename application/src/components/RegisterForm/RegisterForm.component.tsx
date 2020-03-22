import React from 'react'
import useRegisterValidation from 'utils/hooks/useRegisterValidation'
import Text from 'atoms/Text'
import TextInput from 'atoms/TextInput'
import Button from 'atoms/Button'
import PlacesAutoComplete from 'atoms/PlacesAutoComplete'
import * as V from 'utils/helpers/validation'
import * as S from './RegisterForm.style'

const RegisterForm = () => {
  const [state, dispatch] = useRegisterValidation()

  const onEndEditing = type => {
    switch (type) {
      case 'first':
        return lastNameRef.current.focus()
      case 'last':
        return emailRef.current.focus()
      case 'email':
        return streetRef.current.triggerFocus()
      default:
        return
    }
  }

  const submitForm = () => {
    // if (email === '') return alert('Please include your email address.')
    // if (firstName === '') return alert('Please include your first name.')
    // if (lastName === '') return alert('Please include your last name.')
    // alert(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}`)
  }

  return (
    <S.RegisterForm>
      <S.TitleWrapper>
        <Text size="h1">REGISTER</Text>
      </S.TitleWrapper>
      <S.LabelWrapper>
        <Text size="h3">FIRST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper validation={state.first.valid}>
        <TextInput
          ref={state.refs.first}
          autoFocus={true}
          blurOnSubmit={false}
          value={state.first.value}
          autoCompleteType="off"
          clearButtonMode="while-editing"
          onChangeText={t => dispatch({ type: 'first', value: t })}
          onSubmitEditing={() => onEndEditing('first')}
          multiline={false}
          placeholder="Your First Name"
          returnKeyType="next"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">LAST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper validation={state.last.valid}>
        <TextInput
          ref={state.refs.last}
          blurOnSubmit={false}
          onSubmitEditing={() => onEndEditing('last')}
          clearButtonMode="while-editing"
          autoCompleteType="off"
          value={state.last.value}
          onChangeText={t => dispatch({ type: 'last', value: t })}
          multiline={false}
          placeholder="Your Last Name"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">EMAIL ADDRESS</Text>
      </S.LabelWrapper>
      <S.InputWrapper validation={state.email.valid}>
        <TextInput
          ref={state.refs.email}
          blurOnSubmit={false}
          onSubmitEditing={() => onEndEditing('email')}
          clearButtonMode="while-editing"
          value={state.email.value}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={t => dispatch({ type: 'email', value: t })}
          multiline={false}
          placeholder="Your Email Address"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">STREET ADDRESS</Text>
      </S.LabelWrapper>
      <PlacesAutoComplete
        validation={state.street.valid}
        onChangeText={t => dispatch({ type: 'street', value: t })}
        onPress={({ description }) => dispatch({ type: 'street', value: description })}
        value={state.street.value}
        ref={state.refs.street}
      />
      <S.ButtonWrapper>
        <Button onPress={submitForm}>REGISTER NOW</Button>
      </S.ButtonWrapper>
    </S.RegisterForm>
  )
}

export default RegisterForm
