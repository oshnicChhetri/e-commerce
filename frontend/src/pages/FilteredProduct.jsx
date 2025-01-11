import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFilteredProduct from "../hooks/useFilteredProduct";

const FilteredProduct = () => {
    const { loading, addToCart } = useAddToCart();
    const { query } = useParams();
    const { filteredProductLoading, filteredProduct } = useFilteredProduct({query}); // Use the query directly here

    const handleAddToCart = async (productId) => {
        await addToCart({ productId });
    };

    // Show loading state while fetching data
    if (filteredProductLoading) {
        return <div>Loading products...</div>;
    }

    // Show message if no products are found
    if (!filteredProduct || filteredProduct.length === 0) {
        return <div>No products found for "{query}".</div>;
    }

    // Display the filtered products only if there are products
    return (
        <div className="categoryProductContainer">
            {filteredProduct.length > 0 ? (
                filteredProduct.map((product) => (
                    <div key={product._id} className="categoryProduct">
                        <Link to={`/product/${product._id}`} className="categoryLink">
                            <div className="categoryProductImageContainer">
                                <img className="categoryProductImage" src={product.image} alt={product.productName} />
                            </div>
                        </Link>

                        <div className="categoryProductDetailContainer">
                            <div className="categoryProductDetailContainerText">
                                <p>{product.productName}</p>
                                <p className="categoryProdcutPrice">{`${product.price}£`}</p>
                            </div>

                            <div
                                className="cartButtonContainer"
                                onClick={() => !loading && handleAddToCart(product._id)} // Prevent click when loading
                            >
                                {loading ? (
                                    <FaSpinner className="spinnerIcon" />
                                ) : (
                                    <IoCartOutline className="cartButton" />
                                )}
                            </div>
                            
                        </div>
                    </div>
                ))
            ) : (
                <div>No products found for your search query.</div>
            )}
        </div>
    );
};

export default FilteredProduct;
