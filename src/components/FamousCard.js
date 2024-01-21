import "../styles/home.css";

const FamousCard = ({famousImage,famousdesc,famoustitle,famousproduct}) => {
    return (
        <article className="famous-card">
            <div className="shadow-container">

                  <img src={famousImage} alt="famous-card" style={{width:"16rem",height :"28rem",objectFit:"cover"}}></img>
                <div className="famous-content">
                <h5 className="famous-title">{famoustitle}</h5>
                    <h6>{famousproduct}</h6>
                    <p className="famous-text">{famousdesc} </p>
                </div>
              
            </div>
                </article>
    );
}

export default FamousCard;
