import {products} from "../../helper/data"
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="container">
      {products.map((item)=>{
        return(
          <div className="card" key={item.id}>
            <div className="price">
              <h3>{(item.price).toFixed(2)}$</h3>
            </div>
            <img src={item.image} alt="user" />
            <div className="card-over">
              <h2 className="title">{item.title}</h2>
            </div>
          </div>
        )
      })}
      
    </div>
  )
}

export default ProductCard