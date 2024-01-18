import React, { useState } from "react";
import RatingStars from 'react-rating-stars-component';
import { Link } from "react-router-dom";
import image1 from '../assets/images/add-cart.svg';
import image2 from '../assets/images/prodcompare.svg';
import image3 from '../assets/images/view.svg';
import wishlistimage from '../assets/images/wish.svg';
import "../styles/home.css";

export default function ProductCard({ productimg1, productimg2, productTitle, title, brand, price }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <article className="col-2">
      <div className="product-card position-relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
       <Link to="#" onClick={(e)=> e.preventDefault}> 
       <div className="product-images ">
        <img
            src={isHovered ? productimg2 : productimg1}
            alt={productTitle}
            width={"100%"}
            style={{
              transition: "all 0.3s ease-in-out",
            }}
          />
        </div>
       </Link>
        <div className="product-detail ">
          <h6 className="brand text-danger">{brand}</h6>
          <h5 className="product-title">
            {title}
          </h5>
          <RatingStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          ,<p className="price">{price}</p>
          <div className="wishList  position-absolute">
            <div>
              <Link>
                <img src={wishlistimage} alt="wishlist" />
              </Link>
            </div>
          </div>
          <div className="position-bar position-absolute">
            <div className="d-flex flex-column gap-16">
              <div>
                <Link>
                  <img src={image2} alt="view" />
                </Link>
              </div>
              <Link>
                <img src={image3} alt="product-compare" />
              </Link>
              <Link>
                <img src={image1} alt="add-cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    
  );
}
