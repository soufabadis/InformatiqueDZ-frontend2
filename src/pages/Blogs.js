import BlogCardPageComp from "../components/BlogCardPageComp";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { blogspagedata } from "../data/blogspagedata";

import "../styles/blogs.css";

const Blogs = () => {
  return (
      <main>
        <Meta title="Blogs"></Meta>
        <div className="blogs-wrapper  home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Find by Categories</h3>
                  <div className="filter-card">
                    <ul>
                      <li>Laptop</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
                </div>
                <div className="col-9">
                <div className="d-flex flex-wrap gap-4 justify-content-around align-items-center">
                {blogspagedata.map((item) => (
               <BlogCardPageComp
              day={item.day}
              title={item.title}
              desc={item.description.split(' ').slice(0, 15).join(' ')}
              description={item.description}
              img={item.Image}
              id={item.id}
            ></BlogCardPageComp>
          ))}
                </div>
                </div>
            </div>
          </div>
        </div>

        <BreadCrumb title="Our Blogs"></BreadCrumb>
      </main>
  );
};

export default Blogs;
