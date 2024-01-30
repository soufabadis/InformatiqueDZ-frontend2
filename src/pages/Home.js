import React from "react";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";
import service4 from "../assets/images/service-04.png";
import service5 from "../assets/images/service-05.png";
import service1 from "../assets/images/service.png";
import BlogCard from "../components/BlogCard";
import FastMarque from "../components/FastMarque";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Card from "../components/card";
import { blogData } from "../data/blogData";
import { productData } from "../data/productData";
import { specialProductData } from "../data/specialProductData";
import "../styles/home.css";
import { famousData } from "../data/famousData";
import FamousCard from "../components/FamousCard";
import { appleData } from "../data/appleCardData";
import Meta from "../components/Meta";

function Home() {
  return (
    <main>
      <Meta title='Home'></Meta>
      <section className="home-wrapper-1 py-3.5">
        <div className="container-fluid p-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="carousel-background carousel-overlay "
                  style={{ backgroundImage: `url(${image1})` }}
                ></div>
                <div className="carousel-caption">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="carousel-background carousel-overlay "
                  style={{ backgroundImage: `url(${image2})` }}
                ></div>
                <div className="carousel-caption">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="carousel-background carousel-overlay "
                  style={{ backgroundImage: `url(${image3})` }}
                ></div>
                <div className="carousel-caption">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* section 2 home*/}

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
        
          <div className="row justify-content-center align-items-center">
            {/* Display 2 columns on small screens */}
            <div className="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center services">
              <img
                src={service1}
                alt="Service 1"
                className="img-fluid"
                style={{ maxWidth: "100px" }}
              />
              <h6>Free Shipping</h6>
              <p>From all order over 5$.</p>
            </div>
            <div className="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center services">
              <img
                src={service2}
                alt="Service 2"
                className="img-fluid"
                style={{ maxWidth: "100px" }}
              />
              <h6>Daily Surprise Offers</h6>
              <p>Save up to 25%.</p>
            </div>

            {/* Display 2 columns on small screens */}
            <div className="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center services">
              <img
                src={service3}
                alt="Service 3"
                className="img-fluid"
                style={{ maxWidth: "100px" }}
              />
              <h6>Support 24/7</h6>
              <p>Our support team is available 24/7.</p>
            </div>
            <div className="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center services">
              <img
                src={service4}
                alt="Service 4"
                className="img-fluid"
                style={{ maxWidth: "100px" }}
              />
              <h6>Affordable Prices</h6>
              <p>Get Factory Default Price.</p>
            </div>

            {/* Display 2 columns on small screens */}
            <div className="col-4 col-md-2 d-flex flex-column align-items-center justify-content-center services">
              <img
                src={service5}
                alt="Service 5"
                className="img-fluid"
                style={{ maxWidth: "100px" }}
              />
              <h6>Secure Payments</h6>
              <p>100% secure payment.</p>
            </div>
          </div>
        </div>
      </section>
      {/*section 3 applecard*/}
     <section className=" applecardwrapper container-xxl py-3" style={{backgroundColor :"#eee" ,padding:"0.5rem",margin:"0.5rem 0"}}>
        <h3 className="section-title mb-3 py-3"> APPLE PRO DISPLAY</h3>
     <div className="row justify-content-center">
      {appleData.map((item,index)=>(
        <article className="col-3 ">
          <Card key={index} title={item.product} product={item.product} price1={item.price1} price2={item.price2} price3={item.price3}totalprice={item.totalprice} image={item.Image}></Card>
        </article>
      ))}
     </div>
   </section>
       {/*section 4 brand */}
      <section className="brand-section-wrapper  home-wrapper-2 py-3">
        <FastMarque></FastMarque>
      </section>
      {/*section 5 Blog*/}
      <section className="blog-wrapper py-5 home-wrapper-2 ">
        <h3 className="section-title py-2">OUR BLOGS</h3>
        <div className="blogWrapper d-flex align-items-center justify-content-center gap-5 ">
          {blogData.map((item) => (
            <BlogCard
              day={item.day}
              title={item.title}
              desc={item.description}
              img={item.Image}
              customblogstyle={"blog-card"}
            ></BlogCard>
          ))}
        </div>
      </section>
      {/*section 6 product */}
      <section className="productcard-section-wrapper  home-wrapper-2 py-5">
        <div className="container-xxl">
          <h3 className="section-title py-2">Special Product</h3>
          <div className="row">
            <div className="col-12">
              <div className="productcardWrapper  d-flex flex align-items-center justify-content-center gap-5 ">
                {productData.map((item) => (
                  <ProductCard
                    productTitle={item.title}
                    productimg1={item.Image}
                    productimg2={item.Image2}
                    title={item.title}
                    price={item.price}
                    brand={item.brand}
                    customstyle={"col-2"}
                  ></ProductCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*section 7 specialProduct */}
      <section className="specialproduct-section-wrapper py-5  home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row d-flex justify-content-center gap-4 ">
            {specialProductData.map((item) => (
              <SpecialProduct
                image={item.Image2}
                imagealt={item.imagealt}
                brand={item.brand}
                title={item.title}
                price={item.price}
                discountDay={item.discountDay}
                strikedprice={item.strikedprice}
                productQuantity={item.productQuantity}
              ></SpecialProduct>
            ))}
          </div>
        </div>
      </section>
      {/*section 7 famous product */}
      <section className=" famous-wrraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <h3 className="section-title py-2">Famous product</h3>
          <div className="row">
            {famousData.map((item,index) => (
            <div key={index}  className="col-3">
              <FamousCard
                famoustitle={item.famousTitle}
                famousImage={item.famousImage}
                famousproduct={item.famousProduct}
                famousdesc={item.famousdescr}
              ></FamousCard>
            </div>)
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
