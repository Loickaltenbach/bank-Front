import { useNavigate } from 'react-router-dom'
import { login } from '../redux/action'
import store from '../redux/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const LoginForm = () => {

  const navigate = useNavigate()
  const statutReq = useSelector((state: any) => state.status)
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const form = document.getElementsByTagName('form')[0]
  const divInputUsername = document.getElementsByClassName('input-wrapper')[0]

  useEffect(() => {
    if (statutReq === 'void') {
      recupererSession()
    }
    if (statutReq === 'connecte') {
      if (rememberMe) {
        sauvegarderSession()
      } else {
        supprimerSession()
      }
      navigate('/Profile')
    }
    if (statutReq === 'error') {
      let pError = document.getElementsByClassName('error')[0]
      if (pError === undefined) {
        pError = document.createElement('p')
        pError.classList.add('error')
        pError.textContent = 'Invalid username or password'
        form.appendChild(pError)
      }
    }
  }, [statutReq, navigate])

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const connexion = (e: any) => {
    e.preventDefault()
    if (email || password) {
      store.dispatch(login(email, password))
    }
  }

  const sauvegarderSession = () => {
    try {
      if (email|| password) {
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('password', password)
        sessionStorage.setItem('rememberMe', rememberMe ? 'true' : 'false')
      }
    } catch (e) {
      console.warn(e)
    }
  }

  const supprimerSession = () => {
    try {
      const dataList = document.getElementById('usernames')
      if (dataList) divInputUsername.removeChild(dataList)
      sessionStorage.clear()
    } catch (e) {
      console.warn(e)
    }
  }

  const recupererSession = () => {
    try {
      if (email || password) {
        let dataList = document.getElementById('usernames')
        if (!dataList && !email) {
          dataList = document.createElement('datalist')
          const optionUsername = document.createElement('option')
          optionUsername.value = email
          dataList.id = 'usernames'
          divInputUsername.appendChild(dataList)
          dataList.appendChild(optionUsername)
        }
      }
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <section>
      <i className='fa fa-user-circle fa-4x sign-in-icon' />
      <h1> Sign In </h1>
      <form>
        <div className='input-wrapper'>
          <label htmlFor='username'>Username</label>
          <input type='text' list='usernames' id='email' onChange={handleEmailChange} required />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={handlePasswordChange} required />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' onClick={() => setRememberMe(!rememberMe)} />
          <label htmlFor='remember-me'>Remember me</label>
        </div>
        <button
          className='sign-in-button'
          onClick={connexion}
        > Sign In
        </button>
      </form>
    </section>
  )
}

export default LoginForm;