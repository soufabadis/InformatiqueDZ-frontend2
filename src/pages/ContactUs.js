import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import "../styles/contact.css";

const ContactUs = () => {
  return (
    <div>
      <main>
        <Meta title="ConatctUs"></Meta>
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
                <div className="contact-wrapper d-flex justify-content-between align-items-center">
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
                      <div>
                        <button type="submit" className="btn">
                         Send
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-45">
                    <h3 className="contact-title">get in touch with us</h3>
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
