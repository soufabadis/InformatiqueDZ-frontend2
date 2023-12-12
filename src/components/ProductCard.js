import React from "react";
import RatingStars from 'react-rating-stars-component';
import { Link } from "react-router-dom";
import image from '../assets/images/add-cart.svg';
import "../styles/home.css";

export default function ProductCard({ productimg, productTitle ,title,brand,price}) {
  return (
    <div className="col-2">
      <div className="product-card position-relative">
        <div className="product-images ">
          <img src={productimg} alt={productTitle} width={"100%"} />
        </div>
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
          <div className="position-bar position-absolute">
          <div className="d-flex flex-column">
            <Link>
            <img src={image} alt=""/>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
