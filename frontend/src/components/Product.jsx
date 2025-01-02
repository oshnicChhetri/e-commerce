import { IoCartOutline } from "react-icons/io5";

const Product = () => {
    return (
        <div className='categoryProduct'>
            <div className='categoryProductImageContainer'>
                <img className="categoryProductImage" src="/phone.jpg" alt="" />

            </div>

            <div className='categoryProductDetailContainer'>

                <div className='categoryProductTexts'>
                    <p>Iphone</p>
                    <p className="categoryProdcutPrice">{`${100}£`}</p>
                </div>

                <div className='cartButtonContainer'>
                    <IoCartOutline className='cartButton' />

                </div>

            </div>
        </div>
    )
}

export default Product
