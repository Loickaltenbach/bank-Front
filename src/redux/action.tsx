import store from './store'

const dataFetching = () => ({ type: 'loading' })
const dataError = () => ({ type: 'error' })
const connexionAction = (data: any) => ({ type: 'connexion', payload: data })
const profileAction = (data: any) => ({ type: 'profile', payload: data })
const updateUserAction = (data: any) => ({ type: 'updateUser', payload: data })
const deconnexionAction = () => ({ type: 'deconnexion' })

export const deconnexion = () => {
  return function (dispatch: any) {
    dispatch(deconnexionAction())
  }
}

export const login = (email: string, password: string) => {
  return function (dispatch: any) {
    try {
      dispatch(dataFetching())
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email: email, password: password })
      }
      fetch('http://localhost:3001/api/v1/user/login', requestOptions).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            dispatch(connexionAction(data))
            dispatch(profile())
          })
        } else {
          dispatch(dataError())
        }
      })
    } catch (error) {
      dispatch(dataError())
    }
  }
}

export const profile = () => {
  return function (dispatch: any) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer' + store.getState().token
        }
      }
      fetch('http://localhost:3001/api/v1/user/profile', requestOptions).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            dispatch(profileAction(data))
          })
        }
      })
    } catch (error) {
      dispatch(dataError())
    }
  }
}

export const updateUserInfo = (name: string, lastName: string) => {
  return function (dispatch: any) {
    try {
      dispatch(dataFetching())
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: 'Bearer' + store.getState().token
        },
        body: JSON.stringify({ firstName: name, lastName: lastName })
      }
      fetch('http://localhost:3001/api/v1/user/profile', requestOptions).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            dispatch(updateUserAction(data))
          })
        }
      })
    } catch (error) {
      dispatch(dataError())
    }
  }
}