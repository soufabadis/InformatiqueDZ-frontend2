import React from "react";
import RatingStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function SpecialProduct({
  discountDay,
  strikedprice,
  price,
  image,
  imagealt,
  brand,
  title,
  productQuantity,
}) {
  return (
    <article className="col-3">
      <div>
        <div className="special-product-card">
          <div className="d-flex">
            <div className="special-product-image">
              <img src={image} alt={imagealt} className="img-fluid"/>
            </div>
            <div className="special-card-info">
              <h5 className="brand">{brand}</h5>
              <h7 className="title ">{title}</h7>
              <RatingStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                {" "}
                <span className="p-red">{price}</span> &nbsp;{" "}
                <strike>{strikedprice}</strike>
              </p>
              <div className="discount-till d-flex gap-10 align-items-center">
                <p>
                  <b>{discountDay}</b>days
                </p>
              

              </div>
              <p>
                Product:<span>{productQuantity}</span>
              </p>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{width: '25%'}}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <Link className="btn btn-primary button-addtocart" href="#" role="button">Add to Cart</Link>

            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
