import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import { FaSpinner } from "react-icons/fa";


const Product = ({product}) => {
const {loading, addToCart} = useAddToCart();

const handleAddToCart = async(productId) => {

  await  addToCart({productId})
 
}


    return (
        
        
        <div key={product._id} className='categoryProduct'>
            <Link to={`/product/${product._id}`} className="categoryLink">
            
          
            <div className='categoryProductImageContainer'>
                <img className="categoryProductImage" src={product.image} alt="" />

            </div>

            </Link>

            <div className='categoryProductDetailContainer'>

                <div className='categoryProductTexts'>
                    <p>{product.productName}</p>
                    <p className="categoryProdcutPrice">{`${product.price}£`}</p>
                </div>

                <div className='cartButtonContainer'>
                    {
                        loading ? (
                            <FaSpinner className="spinnerIcon" />
                        ) : (
                    <IoCartOutline className='cartButton' onClick={() => { handleAddToCart(product._id) }} />
                        )

                    }

                    
                    

                </div>

            </div>
            
            
        </div>
    )
}

export default Product
