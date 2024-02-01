import image1 from "../assets/images/cross.svg"
import "../styles/compare.css";
import Colors from "../components/Colors";
const Comparecard = ({productColors,producttype,productImage,productPrice,productSpecs,alt,brand,availability,Size1,Size2}) => {
    return (
        <article className="compare-products-card position-relative">
        <img src={image1} alt="cross" className="position-absolute cross img-fluid" ></img>
        <div className="product-card-image">
        <img src={productImage} alt={alt}  className="compare-image " ></img>
        </div>
        <div className="compare-product-detail">
          <h5 className="title font-Baskerville">{productSpecs}</h5>
          <h6 className="price mb-3">{productPrice}</h6>
          <div >
            <div className="product-detail d-flex justify-content-between align-items-center">
              <h6>Brand:</h6>
              <p className="pt-2 text-danger fw-bold">{brand}</p>
            </div>
            <div className="product-detail d-flex justify-content-between align-items-center">
              <h6>Type :</h6>
              <p className="pt-2">{producttype}</p>
            </div>
            <div className="product-detail d-flex justify-content-between align-items-center">
              <h6>Color:</h6>
              <Colors numberOfItems={3} colors={productColors}></Colors>
            </div>
            <div className="product-detail d-flex justify-content-between align-items-center">
              <h6>Size:</h6>
              <div className="d-flex gap-2"><p>{Size1}</p><p>{Size2}</p></div>
            </div>
            <div className="product-detail d-flex justify-content-between align-items-center gap-2">
              <h6>Availability:</h6>
              <p className="pt-2">{availability}</p>
            </div>
         
          </div>
        </div>
      </article>
    );
}

export default Comparecard;
