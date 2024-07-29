import './card.css'
const Card = (props)=>{
    const {productData} = props;
    console.log("card...",productData)
    const {name, price, stock, image_url} = productData;
    return <div className="card-widget">
                <img src={image_url} alt="{name}"/>
                <p>{name}</p>
                 <p>{price}</p>
                <p>Quantity Left: {stock}</p>
            </div>
}

export default Card;