import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';


export default function BlogCard({img,day,title,desc,customblogstyle,grid}) {
  return (
        <div className={{grid}}>
        <div className={customblogstyle}>
            <div className="card-image">
                <img src={img} alt='blog'  width={'100%'}/>
            </div>
            <div className="blog-content">
                <p>{day}</p>
                <h5> {title}</h5>
                <p className='decr'>{desc}
                </p >
                <button className='btn btn-primary'
                >
                     <Link to='/'  className=' text-white'>
                    Read More
                </Link>
                </button>
               
            </div>
        </div>
    </div>
  )
}
