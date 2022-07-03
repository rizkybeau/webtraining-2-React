import React from 'react';
import { images } from '../../constant';
import './Header.css';
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">rumah minimalis khas Eropa</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Membangun rumah dari nol bersama kami. kami memiliki pengalaman yang
          sangat lama dan klien kami sudah berbagai macam daerah di indonesia.{' '}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.banner} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
