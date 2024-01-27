import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import randomImage from "../assets/images/watch.jpg";
import RatingStars from "react-rating-stars-component";
import gridIcons from  "../assets/images/gr.svg";
import gridIcons2 from  "../assets/images/gr2.svg";
import gridIcons3 from  "../assets/images/gr3.svg";
import gridIcons4 from  "../assets/images/gr4.svg";

import "../styles/store.css";

import React, { useState } from 'react';
import ProductCard from "../components/ProductCard";
import { storeData } from "../data/ourStoreData";

const Store = () => {
  const [grid, setGrid] = useState(0);
  const gridsetter =(i)=>{
      setGrid(i)
      alert(grid)
  }
  return (
    <div>
        <main>
        <Meta title="Our Store"></Meta>
        <div className="store-wrapper container home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop by Categories</h3>
                  <div className="filter-card">
                    <ul>
                      <li>Laptop</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter By</h3>
                  <h5 className="sub-title">Availability</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      {" "}
                      In Stock (1){" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0){" "}
                    </label>
                  </div>
                  <h5 className="sub-title mt-4">Price</h5>
                  <div className="d-flex align-items-center gap-1">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="formId1"
                        id="formId1"
                        placeholder=""
                      />
                      <label htmlFor="formId1">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="formId1"
                        id="formId1"
                        placeholder=""
                      />
                      <label htmlFor="formId1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title my-4">Colors</h5>

                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title my-4">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-1"
                      />
                      <label className="form-check-label" htmlFor="">
                        {" "}
                        S (2){" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-2"
                      />
                      <label className="form-check-label" htmlFor="">
                        M (0){" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-3"
                      />
                      <label className="form-check-label" htmlFor="">
                        L (0){" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-3"
                      />
                      <label className="form-check-label" htmlFor="">
                        XL (0){" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-content-center gap-2">
                      <span className="bg-light rounded-3 py-2 px-3 .product-tags-badge text-secondary">
                        Headphone
                      </span>
                      <span className="bg-light rounded-3 py-2 px-3 .product-tags-badge text-secondary">
                        Loptop
                      </span>
                      <span className="bg-light rounded-3 py-2 px-3 .product-tags-badge text-secondary">
                        Mobile
                      </span>
                      <span className="bg-light rounded-3 py-2 px-3 .product-tags-badge text-secondary">
                        Tv
                      </span>
                      <span className="bg-light rounded-3 py-2 px-3 .product-tags-badge text-secondary">
                        Watch
                      </span>
                    </div>
                  </div>
                </div>
                <div className="filter-card  mb-3">
                  <h3 className="filter-title">Random Product</h3>
                  <div className="random-products d-flex border-bottom">
                    <div className="w-50">
                      <img
                        src={randomImage}
                        className="img-fluid"
                        alt="watch"
                      ></img>
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <RatingStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex mt-2">
                    <div className="w-50">
                      <img
                        src={randomImage}
                        className="img-fluid"
                        alt="watch"
                      ></img>
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <RatingStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="filter-grid">
                  <div className="d-flex align-items-center justify-content-between filter-grid-select">
                       <div className="d-flex align-items-center gap-3">
                       <span className="bg-white rounded-3 py-2 px-3 .product-tags-badge">
                      Sort By :
                    </span>
                   <div >
                    <select
                     
                    >
                      <option selected>Best selling</option>
                      <option value="">Alphabetically A-Z</option>
                      <option value="">Alphabetically A-Z</option>
                      <option value="">Price. low to high</option>
                      <option value="">Price. heigh to low</option>
                      <option value="">Date. new to old</option>
                      <option value="">Date. old to new</option>

                    </select>
                      
                   </div>
                   </div>
                       <div className="d-flex align-items-center justify-content-end gap-2">
                        <div className="grid-text">
                        <p >Products</p>
                        </div>
                        <div className="d-flex align-items-center gap-2 iconsgrid">
                          <img src={gridIcons2} className="img-fluid d-block" alt="grid" onClick={()=>gridsetter(6)}></img>
                          <img src={gridIcons3} className="img-fluid d-block" alt="grid" onClick={()=>gridsetter(3)} ></img>
                          <img src={gridIcons4}  className="img-fluid d-block" alt="grid" onClick={()=>gridsetter(4)}></img>
                          <img src={gridIcons} className="img-fluid d-block" alt="grid" onClick={()=>gridsetter(12)}></img>
                        </div>
                       </div>
                  </div>
                </div>
                <div className="product-list flex-wrap d-flex align-items-center gap-7 justify-content-around py-4">
                  {storeData.map((item,index)=> (
                    <ProductCard
                    productTitle={item.title}
                    productimg1={item.Image}
                    productimg2={item.Image2}
                    title={item.title}
                    price={item.price}
                    brand={item.brand}
                    key={index}
                    grid={grid}                                        
                  ></ProductCard>
                  ))}
                </div>
              </div>
            
            </div>
          </div>
        </div>
        <BreadCrumb title="Our Store"></BreadCrumb>
      </main>
    
    </div>
  );
}

export default Store;
