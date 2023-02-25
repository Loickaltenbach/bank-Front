import { Footer, Header, Account, Info } from '../components'
import LoginScreen from './LoginScreen'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserScreen = () => {
  const connected = useSelector((state: any) => state.connected)
  return (
    connected
      ? (
        <div className='user'>
          <Header />
          <main>
            <Info />
            <Account titre='Argent Bank Checking (x8349)' montant='$2,082.79' description='Available Balance' />
            <Account titre='Argent Bank Savings (x6712)' montant='$10,928.42' description='Available Balance' />
            <Account titre='Argent Bank Credit Card (x8349)' montant='$184.30' description='Current Balance' />
          </main>
          <Footer />
        </div>
        )
      : (<Routes><Route path='/*' element={<LoginScreen />} /></Routes>)
  )
}
export default UserScreen;