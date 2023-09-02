import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Footer() {
  return  <>
      {/* Footer Top */}
      <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center '>
          <div className='col-5 d-flex  justify-content-center gap-3'>
            <FontAwesomeIcon icon={faRocket} size="xl" />
            <h5>Sign Up for Newsletter</h5>
          </div>
          <div className='col-7 '>
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
              <h5>Section 1</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link1'>Link 1</Link>
                </li>
                <li>
                  <Link to='/link2'>Link 2</Link>
                </li>
                <li>
                  <Link to='/link3'>Link 3</Link>
                </li>
                <li>
                  <Link to='/link4'>Link 4</Link>
                </li>
                <li>
                  <Link to='/link5'>Link 5</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Section 2</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link6'>Link 6</Link>
                </li>
                <li>
                  <Link to='/link7'>Link 7</Link>
                </li>
                <li>
                  <Link to='/link8'>Link 8</Link>
                </li>
                <li>
                  <Link to='/link9'>Link 9</Link>
                </li>
                <li>
                  <Link to='/link10'>Link 10</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Section 3</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link11'>Link 11</Link>
                </li>
                <li>
                  <Link to='/link12'>Link 12</Link>
                </li>
                <li>
                  <Link to='/link13'>Link 13</Link>
                </li>
                <li>
                  <Link to='/link14'>Link 14</Link>
                </li>
                <li>
                  <Link to='/link15'>Link 15</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 4 */}
          <div className='col-md-3 text-center'>
            <div className='mb-4'>
              <h5>Section 4</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/link16'>Link 16</Link>
                </li>
                <li>
                  <Link to='/link17'>Link 17</Link>
                </li>
                <li>
                  <Link to='/link18'>Link 18</Link>
                </li>
                <li>
                  <Link to='/link19'>Link 19</Link>
                </li>
                <li>
                  <Link to='/link20'>Link 20</Link>
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
