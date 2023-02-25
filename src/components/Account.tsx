interface AccountProps {
    titre: string,
    montant: string,
    description: string
  }

const Account = (props: AccountProps) => {
    return (
      <section className='compte'>
        <div>
          <h3> {props.titre} </h3>
          <p className='compte-montant'> {props.montant} </p>
          <p className='compte-description'> {props.description} </p>
        </div>
        <div className='cta'>
          <button> View transactions </button>
        </div>
      </section>
    )
  }
  
  export default Account;