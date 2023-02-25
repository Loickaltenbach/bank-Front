import { Header, Footer, LoginForm } from '../components'

const LoginScreen = () => {
  return (
    <div className='connexion'>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}

export default LoginScreen;