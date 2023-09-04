import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {IoMdClose} from 'react-icons/io'

import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const overlayStyles = {
  height: '100%',
  backgroundColor: '#ffff',
}

const Header = () => (
  <nav className="navContainer">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
        alt="website logo"
        className="website_logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button data-testid="hamburgerIconButton" type="button">
          <GiHamburgerMenu />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <div className="tharun">
            <button
              data-testid="closeButton"
              type="button"
              className="close"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul>
              <li className="cen">
                <AiFillHome />
                <Link to="/">
                  <h1 className="home">Home</h1>
                </Link>
              </li>
              <li className="cen">
                <BsInfoCircleFill />
                <Link to="/about">
                  <h1 className="home">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
