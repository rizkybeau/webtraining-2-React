/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line jsx-a11y/alt-text
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../../constant';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">JL.SUDIRMAN NO 1302I. JAKARTA SELATAN</p>
        <p className="p__opensans">+62 212-344-1230</p>
        <p className="p__opensans">+62 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;memberi layanan kepada konsumen dengan puas adalah tugas Kami.
          Kami bangun rumah impian anda.&quot;
        </p>

        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Mr Real Estate. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
