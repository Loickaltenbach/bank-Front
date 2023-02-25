interface ItemProps {
    image: string,
    titre: string,
    description: string
  }

const Item = (props: ItemProps) => {
    return (
      <div className='item'>
        <img src={props.image} alt='item' />
        <h3> {props.titre} </h3>
        <p> {props.description} </p>
      </div>
    )
  }
  
  export default Item;
  