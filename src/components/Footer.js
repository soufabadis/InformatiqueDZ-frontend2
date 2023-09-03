import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebookF, faTelegram, faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return  <>
      {/* Footer Top */}
      <footer className='py-3'>
  <div className='container-xxl'>
    <div className='row align-items-center '>
      <div className='col-md-5 col-12 d-flex justify-content-center gap-3 rocket-icon'>
        <FontAwesomeIcon icon={faRocket} size="xl" />
        <h5>Sign Up for Newsletter</h5>
      </div>
      <div className='col-md-7 col-12'>
        <div className='input-group'>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email'
            aria-label='Enter your email'
            aria-describedby='subscribe-button'
          />
          <button
            className='btn btn-primary'
            type='button'
            id='subscribe-button'
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>

      {/* Footer Center */}
      <footer className='py-4'>
      <div className='container-fluid'>
        <div className='row '>
          {/* Row 1 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Contact Us</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link1'>Demo Store</Link>
                </li>
                <li>
                  <Link to='/link2'>No.1295 Freedom,New York.1111 United State </Link>
                </li>
                <li>
                  <Link to='/link3'>+213658665062</Link>
                </li>
                <li>
                  <Link to='/link4'>Barasofianebadis@gmail.com</Link>
                </li>
                <li className='mt-1'>
                <div className="d-flex justify-content-center">
  <div className="glass-container mx-2">
    <a href="https://www.twitter.com" className="text-black">
      <FontAwesomeIcon icon={faTwitter} className="text-white" />
    </a>
  </div>
  <div className="glass-container mx-2">
    <a href="https://www.twitter.com">
      <FontAwesomeIcon icon={faTelegram} className="text-white" />
    </a>
  </div>
  <div className="glass-container mx-2">
    <a href="https://www.twitter.com">
      <FontAwesomeIcon icon={faGithub} className="text-white" />
    </a>
  </div>
  <div className="glass-container mx-2">
    <a href="https://www.facebook.com">
      <FontAwesomeIcon icon={faFacebookF} className="text-white" />
    </a>
  </div>
</div>


                </li>
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Informations</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link6'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='/link7'>Refund Policy</Link>
                </li>
                <li>
                  <Link to='/link8'>shipping Policy</Link>
                </li>
                <li>
                  <Link to='/link9'>Terms of Service</Link>
                </li>
                <li>
                  <Link to='/link10'>Blogs</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Account</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link11'>Search</Link>
                </li>
                <li>
                  <Link to='/link12'>About Us</Link>
                </li>
                <li>
                  <Link to='/link13'>Faq</Link>
                </li>
                <li>
                  <Link to='/link14'>Contact</Link>
                </li>
                <li>
                  <Link to='/link15'>Size Chart</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Quick Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link16'>Accessaries</Link>
                </li>
                <li>
                  <Link to='/link17'>Laptops</Link>
                </li>
                <li>
                  <Link to='/link18'>Headphones</Link>
                </li>
                <li>
                  <Link to='/link19'>Smart Watches</Link>
                </li>
                <li>
                  <Link to='/link20'>Tablets</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
     
      {/* Foooter Bottom */}
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0'>&copy; {new Date().getFullYear()} Powered By Barasofianebadis@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
}

export default Footer;
