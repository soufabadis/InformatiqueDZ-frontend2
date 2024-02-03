import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import "../styles/compare.css";
import { storeData } from "../data/ourStoreData";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
    return (
        <main>
        <Meta title="Wishlist"></Meta>
        <div className="Wishlist-wrapper  home-wrapper-2 py-5">
         <div className="container">
            <div className="row ">
              <div className="col-12">
              <div className="w-100 wislist-card-wrapper gap-4 pl-4 ">
                  {storeData.map((item,index)=>(
                    <WishlistCard title={item.title} price={item.price} key={index} productImage={item.Image} alt={item.type}></WishlistCard>
                  ))}
                </div>
              </div>
            </div>
         </div>
        </div>

        <BreadCrumb title="Wishlist"></BreadCrumb>
      </main>
    );
}

export default Wishlist;

