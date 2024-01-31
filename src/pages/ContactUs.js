import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { faHouse,faPhone,faEnvelope,faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
  return (
    <div>
      <main>
        <Meta title="Conatct Us"></Meta>
        <div className="contactus-wrapper home-wrapper-2 py-5 container">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51090.361842485705!2d7.666703159845298!3d36.83894060371455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f0083c89f46443%3A0xd2d8b6a35d1ce8cc!2sEl%20Bouni!5e0!3m2!1sfr!2sdz!4v1706618489055!5m2!1sfr!2sdz"
                  width="600"
                  height="450"
                  className={"border-0 w-100 "}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-wrapper d-flex justify-content-between align-items-center ">
                  <div className="w-45">
                    <h3 className="contact-title text-center">Conatct</h3>
                    <form action="" className="d-flex flex-column gap-4  ">
                      <div className="input-wrapper"></div>
                      <div className="">
                        <input type="text" className="form-control " placeholder="name"></input>
                      </div>
                      <div>
                        <input type="email" className="form-control" placeholder="Email"></input>
                      </div>
                      <div>
                        <input type="tel" className="form-control" placeholder="Mobile Number"></input>
                      </div>
                      <div>
                        <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="comment"></textarea>
                      </div>
                      <div className="mx-auto ">
                        <button type="submit" className="btn px-5 ">
                         Send
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-45">
                   <div className="contact-info ">
                   <h3 className=" contact-title text-center">Get in touch with us</h3>
                    <div>
                      <ul >
                        <li className="my-3 d-flex gap-3"><FontAwesomeIcon icon={faHouse} size="xl"></FontAwesomeIcon> <address>Hno: Near village bony , Annaba, Algeria</address></li>
                        <li className="mb-3"><FontAwesomeIcon icon={faPhone} size="xl"></FontAwesomeIcon> <a href="tel +213657097213" className="mx-3 text-dark">+213657097213</a></li>
                        <li className="mb-3"><FontAwesomeIcon icon={faEnvelope} size="xl"></FontAwesomeIcon><a href="mailto:barasofianebadis@gmail.com" className="mx-4 text-dark">Barasofianebadis@gmail.com</a></li> 
                        <li ><FontAwesomeIcon icon={faCircleInfo} size="xl" ></FontAwesomeIcon><span className="mx-3 text-dark">Monday-Thursday 10 AM - 8 PM</span></li>
                      </ul>
                   </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BreadCrumb title="Contact"></BreadCrumb>
      </main>
    </div>
  );
};

export default ContactUs;
