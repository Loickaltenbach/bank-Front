/* eslint-disable no-redeclare */
/* global localStorage */
/* eslint no-undef: "error" */

import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialeState = {
  users: null,
  connected: false,
  status: 'void',
  user: {
    prenom: ' ',
    nom: ' '
  },
  token: '',
  error: null
}

const saveToLocalStorage = (state: any) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

/**
 * Function loadFromLocalStorage
 * load the state in localStorage
 */
const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, loadFromLocalStorage(), composedEnhancer)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store