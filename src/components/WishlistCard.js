import React from 'react';
import image1 from "../assets/images/cross.svg";


const WishlistCard = ({alt,productImage,title,price}) => {
    return (
        <div className=" shadow-container wishlist-card position-relative">
        <img src={image1} alt="cross" className="position-absolute cross img-fluid"></img>
        <div className="wishlist-card-image">
        <img src={productImage} alt={alt} className="w-100 img-fluid"></img>
        </div>
        <div className="p-3 bg-white ">
            <h5 className="title">{title}</h5>
            <h6 className="price text-danger fw-bold">{price}</h6>
        </div>

    </div>
    );
}

export default WishlistCard;
