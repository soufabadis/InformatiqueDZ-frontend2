import image1 from '../assets/images/image1.jpg' ;
import image2 from '../assets/images/image2.jpg' ;
import image3 from '../assets/images/image3.jpg' ;

function Home() {
    const carouselStyle = {
      backgroundImage: 'url("../assets/images/image1.jpg")', // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    return (
      <main>
        <section className='home-wrapper-1 py-5'>
          <div className="container-fluid p-0">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={carouselStyle}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-block w-100 img-fluid">
                  <img src={image2} className="d-block w-100 img-fluid" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 img-fluid">
                  <img src={image3} className="d-block w-100 img-fluid" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-block w-100 img-fluid">
                  <img src={image3} className="d-block w-100 img-fluid" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
                  </div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Home;
  
  