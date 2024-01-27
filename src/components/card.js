import { faApple } from '@fortawesome/free-brands-svg-icons'; // Using the brand icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ProductCardSection = ({title,product,price1,price2,image,price3,totalprice}) => {
  return (
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card text-black" >
              <FontAwesomeIcon icon={faApple} size="lg" className="pt-2 pb-1 px-2" />
              <img
                src={image}
                className="card-img-top"
                alt="Apple Computer"
                width='100%'
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{title}</h5>
                  <p className="text-muted mb-2">{product}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Pro Display XDR</span>
                    <span>{price1}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Pro stand</span>
                    <span>{price2}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Vesa Mount Adapter</span>
                    <span>{price3}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-2">
                  <span>Total</span>
                  <span>{totalprice}</span>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ProductCardSection;