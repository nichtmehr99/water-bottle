import './Bottle.css'
const Bottle = ({bottle,handelAddToCart}) => {
    const {name,img,price} = bottle;
    return (
        <div className="bottle">
            <h4>Bottle:{name}</h4>
            <img src={img} alt="" />
            <p>${price}</p>
            <button onClick={()=> handelAddToCart()}>Purchase</button>
        </div>
    );
};

export default Bottle;