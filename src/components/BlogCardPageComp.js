import React from "react";
import { Link } from "react-router-dom";
import "../styles/blogs.css";

export default function BlogCardPageComp({ img, day, title, desc, id,description }) {
  return (
    <div className="blog-card-page">
      <div className="card-image">
        <img src={img} alt="blog" width={"100%"} />
      </div>
      <div className="blog-content">
        <p>{day}</p>
        <h5> {title}</h5>
        <p className="decr">{desc}</p>
        <button className="btn">
          <Link to={`blog/${id}`} className=" text-white" state={{ img, day, title, description, id } }>
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
}
