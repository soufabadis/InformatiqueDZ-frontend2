import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import image1 from "../assets/images/cross.svg"
import image2 from "../assets/images/watch.jpg"
import "../styles/compare.css";
import Colors from "../components/Colors";

const CompareProducts = () => {
  return (
      <main>
        <Meta title="Compare Products"></Meta>
        <div className="CompareProducts-wrapper  home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row ">
                <div className="col-3">
                <div className="compare-products-card position-relative">
                  <img src={image1} alt="cross" className="position-absolute cross img-fluid" ></img>
                  <div className="product-card-image">
                  <img src={image2} alt="watch " ></img>
                  </div>
                  <div className="compare-product-detail">
                    <h5 className="title font-Baskerville">Honor T1 7.0 1 GB RAM 8GB ROM 7 INCH With WI-FI+3G Tablet</h5>
                    <h6 className="price mb-3">$100</h6>
                    <div >
                      <div className="product-detail d-flex justify-content-between align-items-center">
                        <h6>Brand</h6>
                        <p className="pt-2">Hovels</p>
                      </div>
                      <div className="product-detail d-flex justify-content-between align-items-center">
                        <h6>Type :</h6>
                        <p className="pt-2">watch</p>
                      </div>
                      <div className="product-detail d-flex justify-content-between align-items-center">
                        <h6>Color</h6>
                        <Colors numberOfItems={3} colors={['#3498db',"#2ecc71","#e74c3c"]}></Colors>
                      </div>
                      <div className="product-detail d-flex justify-content-between align-items-center">
                        <h6>Size</h6>
                        <div className="d-flex gap-2"><p>S</p><p>M</p></div>
                      </div>
                      <div className="product-detail d-flex justify-content-between align-items-center">
                        <h6>Availability</h6>
                        <p className="pt-2">avaiable</p>
                      </div>
                   
                    </div>
                  </div>
                </div>
                </div>
               
            </div>
          </div>
        </div>

        <BreadCrumb title="Compare Products"></BreadCrumb>
      </main>
  );
};

export default CompareProducts;
