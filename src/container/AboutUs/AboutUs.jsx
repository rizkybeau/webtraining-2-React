/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { images } from '../../constant';
import './AboutUs.css';
// <h1 className="headtext__cormorant">Our History</h1>
//       <img src={images.history} />
const AboutUs = () => {
  return (
    <div className="app__bg">
      <div className="app__wrapper app__bg  section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
          <img src={images.teams} />
        </div>
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">About Us</h1>
          <p className="p__opensans">
            Membangun rumah dari nol bersama kami. kami memiliki pengalaman
            dibidang konstruksi yang sangat lama dan klien kami sudah berbagai
            macam daerah di indonesia.{' '}
          </p>
        </div>
      </div>
      <div className="app__wrapper section__padding">
        <div className="app__wrapper_info">
          <h1 className="headtext__cormorant">Our History</h1>
          <p className="p__opensans">
            Membangun rumah dari nol bersama kami. kami memiliki pengalaman
            dibidang konstruksi yang sangat lama dan klien kami sudah berbagai
            macam daerah di indonesia.{' '}
          </p>
        </div>
        <div className="app__wrapper_img">
          <img src={images.history} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
