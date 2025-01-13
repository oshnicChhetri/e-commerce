import React from 'react';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import useGetFullProduct from '../hooks/useGetFullProduct';
import useAddToCart from "../hooks/useAddToCart";
import { FaSpinner } from "react-icons/fa";

const FullProductPage = () => {
    const { id } = useParams();
    
    const { productloading, product } = useGetFullProduct(id);
    const { loading, addToCart } = useAddToCart()



    const handleAddToCart = async (productId) => {

        await addToCart({ productId })
    }



    if (productloading) {
        return <div className="message">Loading product...</div>;
    }

    if (!product) {
        return <div className="message">Product not found!</div>;
    }

    return (
        <div className="fullProductContainer">
            <div className="fullProductImageContainer">
                <img src={product.image || '/placeholder.jpg'}  loading="lazy" alt={product.name || 'Product'} />
            </div>

            <h1 className="fullProductName">{product.productName}</h1>

            <div className="fullProductDetailsContainer">
                <p>{product.description || 'No description available.'}</p>
            </div>

            <div className="fullProductPrice">{`${product.price || 0}£`}</div>

            
                {
                    loading ? (
                        <FaSpinner className="spinnerIcon" />
                    ) : (
                        <div className="fullProductCartContainer" onClick={() => { handleAddToCart(product._id) }}>
                        <IoCartOutline className='cartButton'  />
                        </div>
                    )

                }
           
        </div>
    );
};

export default FullProductPage;
