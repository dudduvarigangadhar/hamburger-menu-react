import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website-logo"
          className="logo-img"
        />
      </Link>
      <div>
        <Popup modal trigger={<GiHamburgerMenu />} className="popup-content">
          {close => (
            <div className="hamburger-view-container">
              <div className="close-icon">
                <IoMdClose onClick={() => close()} />
              </div>
              <div className="rendering-view">
                <Link to="/">
                  <div className="link-route-container">
                    <AiFillHome />
                    <p className="content">Home</p>
                  </div>
                </Link>
                <Link to="/about">
                  <div className="link-route-container">
                    <BsInfoCircleFill />
                    <p className="content">About</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </>
)

export default Header
