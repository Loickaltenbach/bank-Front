import { Intro, Footer, Header, Item, Images } from '../components'

const HomeScreen = () => {
  return (
    <div className='accueil'>
      <Header />
      <Intro />
      <div className='items'>
        <Item image={Images.Chat} titre='You are our #1 priority' description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
        <Item image={Images.Money} titre='More savings means higher rates' description='The more you save with us, the higher your interest rate will be!' />
        <Item image={Images.Security} titre='Security you can trust' description='We use top of the line encryption to make sure your data and money is always safe.' />
      </div>
      <Footer />
    </div>
  )
}

export default HomeScreen;