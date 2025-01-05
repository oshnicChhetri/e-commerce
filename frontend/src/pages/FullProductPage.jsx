import React from 'react';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import useGetFullProduct from '../hooks/useGetFullProduct';

const FullProductPage = () => {
    const { id } = useParams();
    
    const { loading, product } = useGetFullProduct(id);

    if (loading) {
        return <div className="message">Loading product...</div>;
    }

    if (!product) {
        return <div className="message">Product not found!</div>;
    }

    return (
        <div className="fullProductContainer">
            <div className="fullProductImageContainer">
                <img src={product.image || '/placeholder.jpg'} alt={product.name || 'Product'} />
            </div>

            <h1 className="fullProductName">{product.productName}</h1>

            <div className="fullProductDetailsContainer">
                <p>{product.description || 'No description available.'}</p>
            </div>

            <div className="fullProductPrice">{`${product.price || 0}£`}</div>

            <div className="fullProductCartContainer">
                <IoCartOutline className="fullProductIcon" />
            </div>
        </div>
    );
};

export default FullProductPage;
