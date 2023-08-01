import React from 'react';
import './Header.css';

import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const navLink = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tour'
  },
] 

const Header = () => {
  return <header className='header'>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/* logo End */}

          {/* menu Start */}
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-3">
              {
                navLink.map((item, i) => (
                  <li key={i} className="nav__item">
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* menu End */}

          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btn d-flex align-items-center gap-4">
              <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
              <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
            </div>

            <span className='mobile__menu'>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
    
}

export default Header