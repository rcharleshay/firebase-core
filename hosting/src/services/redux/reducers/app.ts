import * as A from '../actions'

const dState = {
  darkMode: false,
  keyboard: false,
  intialized: false,
  modal: 'test',
  nav: false
}

const reducer = (state = dState, action) => {
  switch (action.type) {
    case A.INITIALIZE:
      return state

    case A.TOGGLE_DARK_MODE:
      return { ...state, darkMode: action.status }

    case A.TOGGLE_KEYBOARD:
      return { ...state, keyboard: action.status }

    case A.TOGGLE_MODAL:
      return { ...state, modal: action.value || '', modalSlide: 0 }

    case A.TOGGLE_NAV:
      return { ...state, nav: !state.nav }

    default:
      return state
  }
}

export default reducer