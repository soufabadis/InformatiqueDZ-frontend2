import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from 'react-router-dom';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import "../styles/blogs.css";

const SingleBlogs = ( ) => {
    const location = useLocation();
    const { img, title, description} = location.state;

  return (
    <main>
      <Meta title="dynamic"></Meta>
      <div className="single-blog-wrapper  home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
             <div className="single-blog-card">
                <Link to="/blogs" className="text-dark"><FontAwesomeIcon icon={faArrowLeft} className="mx-2 arrow-icons"></FontAwesomeIcon>Go back to blogs</Link>
             <h3 className="text-center mb-3">{title}</h3>
             <img src={img} alt={title} className="img-fluid w-100 mb-3"></img>
              <p>{description}</p>
             </div>
            </div>
          </div>
        </div>
      </div>

      <BreadCrumb title={`blog :${title}`}></BreadCrumb>
    </main>
  );
};

export default SingleBlogs;
