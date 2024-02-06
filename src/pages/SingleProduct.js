import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();

  const { price, title, description ,brand,type} = location.state;

  return (
    <main>
      <Meta title={`${title}`}></Meta>
      <BreadCrumb title={`${title}`}></BreadCrumb>
    </main>
  );
};

export default SingleProduct;
