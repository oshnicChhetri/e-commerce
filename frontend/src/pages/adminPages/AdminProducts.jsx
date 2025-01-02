import logo from "../../../public/logo.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const AdminProducts = () => {

  
  return (
    <div className="adminProductsContainer">
      <div className="adminProductItem">
        <img className="productImage" src={logo} alt="mainLogo" />

        <div className="productItem">
          {"Productflvakkjh aokhjk aklkjn njalkj ,"}
        </div>

        <div className="productItem">
          <span>Price:</span>
          {10}
        </div>

        <div className="productItem">
          <span>Stocks:</span>
          {10}
        </div>
        <div className="productItem">
          
          {"Category"}
        </div>

        <div className="adminProductLogosContainer">
          <FaRegTrashAlt className="deleteLogo" />
          <IoIosArrowDroprightCircle className="arrowLogo" />
        </div>
      </div>




      <div className="adminProductItem">
        <img className="productImage" src={logo} alt="mainLogo" />

        <div className="productItem">
          {"Productflvakkjh aokhjk aklkjn njalkj ,"}
        </div>

        <div className="productItem">
          <span>Price:</span>
          {10}
        </div>

        <div className="productItem">
          <span>Stocks:</span>
          {10}
        </div>
        <div className="productItem">

          {"Category"}
        </div>

        <div className="adminProductLogosContainer">
          <FaRegTrashAlt className="deleteLogo" />
          <IoIosArrowDroprightCircle className="arrowLogo" />
        </div>
      </div>




      <div className="adminProductItem">
        <img className="productImage" src={logo} alt="mainLogo" />

        <div className="productItem">
          {"Productflvakkjh aokhjk aklkjn njalkj ,"}
        </div>

        <div className="productItem">
          <span>Price:</span>
          {10}
        </div>

        <div className="productItem">
          <span>Stocks:</span>
          {10}
        </div>

        <div className="productItem">

          {"Category"}
        </div>

        <div className="adminProductLogosContainer">
          <FaRegTrashAlt className="deleteLogo" />
          <IoIosArrowDroprightCircle className="arrowLogo" />
        </div>
      </div>



    </div>


  );
};

export default AdminProducts;
