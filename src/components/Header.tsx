import { Link } from 'react-router-dom'
import { Images } from './'
import { useSelector } from 'react-redux'
import { deconnexion } from '../redux/action'
import store from '../redux/store'
import { useEffect } from 'react'

const Header = () => {
  const connected = useSelector((state: any) => state.connected)
  const prenom = useSelector((state: any) => state.user.prenom)

  useEffect(() => {
    const divConnected: any = document.getElementsByClassName('connected')[0]
    const aNotConnected: any = document.getElementsByClassName('notConnected')[0]

    if (divConnected !== undefined || aNotConnected !== undefined) {
      if (connected) {
        divConnected.style.display = 'flex'
        aNotConnected.style.display = 'none'
      } else {
        divConnected.style.display = 'none'
        aNotConnected.style.display = 'flex'
      }
    }
  }, [connected])

  return (
    <header>
      <nav>
        <Link to='/'>
          <img src={Images.Logo} alt='Argent Bank Logo' />
        </Link>
        <Link to='/Login' className='notConnected'>
          <i className='fa fa-2x fa-user-circle' />
          <p> Sign In </p>
        </Link>
        <div className='connected'>
          <Link to='/Profile'>
            <i className='fa-solid fa-2x fa-circle-user' />
            <p> {prenom} </p>
          </Link>
          <Link to='/' onClick={(e) => { store.dispatch(deconnexion()) }}>
            <i className='fa-solid fa-arrow-right-from-bracket' />
            <p> Sign out </p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;
