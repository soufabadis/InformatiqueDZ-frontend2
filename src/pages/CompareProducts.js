import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import "../styles/compare.css";
import { storeData } from "../data/ourStoreData";
import Comparecard from "../components/Comparecard";

const CompareProducts = () => {
  return (
    <main>
      <Meta title="Compare Products"></Meta>
      <div className="Compare-Products-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row ">
            <div className="col-12 Products-wrapper d-flex flex-wrap ">

            <div className="col-3 d-flex  ">
              {storeData.slice(0, 4).map((item, index) => (
                <Comparecard
                  brand={item.brand}
                  Size2={item.size[1]}
                  Size1={item.size[0]}
                  availability={item.Availability}
                  alt={item.type}
                  producttype={item.type}
                  productImage={item.Image}
                  productPrice={item.price}
                  productSpecs={item.specs}
                  productColors={item.colors}
                  key={index}
                ></Comparecard>
              ))}
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
