import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useGetAdminProducts from "../../hooks/useGetAdminProducts";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const { loading, products } = useGetAdminProducts();

  if (loading) {
    return <div>Loading...</div>;  // You can show a loading state here if the products are still being fetched
  }

  return (
    <div className="adminProductsContainer">
      {products.length === 0 ? (
        <div className="message">No products available</div>  
      ) : (
        products.map((product) => (
          <div key={product._id} className="adminProductItem">
            <img className="productImage" src={product.image} alt="mainLogo" />

            <div className="productItem">{product.productName}</div>

            <div className="productItem price">
              <span>Price: </span>
              {product.price}
            </div>

            <div className="productItem stocks">
              <span>Stocks: </span>
              {product.stock}
            </div>

            <div className="productItem adminCategory">
              <span>Category: </span>
              {product.category}
            </div>

            <div className="adminProductLogosContainer">
              <FaRegTrashAlt className="deleteLogo" />
            <Link to={`/product/${product._id}`}> 
            <IoIosArrowDroprightCircle className="arrowLogo" />
            </Link>
             
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminProducts;
