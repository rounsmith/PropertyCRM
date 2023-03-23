import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiBed } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5';
import { RxRulerSquare } from 'react-icons/rx';
import { TbMessage } from 'react-icons/tb';
import { FaSmoking } from 'react-icons/fa';
import { MdBalcony, MdKitchen } from 'react-icons/md';
import { CiParking1 } from 'react-icons/ci';

import useWindowSize from '../../../libs/windowSize';

import styles from '../../../styles/components/Property.module.scss';

const Property = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  return (
    <div className={styles['property-wrapper']}>
      <div className={styles['navigation']}>
        <button
          type="button"
          title="back"
          className={styles['back']}
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack size={35} />
        </button>
        <h4>Details</h4>
      </div>
      <div className={styles['property-details-wrapper']}>
        <div className={styles['property-details']}>
          <div className={styles['image-gallery']}>
            <img
              className={styles['big-image']}
              alt="big-image"
              src="/big-property-image.png"
            />
            <div className={styles['side-images']}>
              <img
                className={styles['smaller-image']}
                src="/smaller-property-image-1.png"
                alt="side-image-1"
              />
              <div
                className={styles['image-overlay']}
                style={{
                  backgroundImage: `url('/smaller-property-image-2.png')`,
                }}
              >
                <div className={styles['more-images-overlay']}>
                  <span>+10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['details']}>
            <div className={styles['core-details']}>
              <div className={styles['property-data']}>
                <h6 className={styles['property-type']}>Apartment</h6>
                <h3 className={styles['property-name']}>
                  Star Sun Hotel & Apartment
                </h3>
                <div className={styles['property-location']}>
                  <IoLocationOutline size={width > 991 ? 20 : 16} />
                  <span>North Carolina, USA</span>
                </div>
              </div>
              <div className={styles['property-price']}>
                <div className={styles['stars']}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      key={item}
                    >
                      <path
                        d="M8.13592 1.84334C8.75851 0.0522214 11.2916 0.0522186 11.9142 1.84334L12.8597 4.5635C13.1344 5.35364 13.8717 5.88938 14.7081 5.90642L17.5873 5.9651C19.4831 6.00373 20.2659 8.41282 18.7548 9.55843L16.46 11.2983C15.7934 11.8036 15.5117 12.6705 15.754 13.4712L16.5879 16.2276C17.137 18.0426 15.0877 19.5315 13.5312 18.4484L11.1674 16.8035C10.4808 16.3257 9.56932 16.3257 8.88268 16.8035L6.51887 18.4484C4.96239 19.5315 2.91309 18.0426 3.4622 16.2276L4.29612 13.4712C4.53835 12.6705 4.2567 11.8036 3.5901 11.2983L1.29526 9.55843C-0.215802 8.41282 0.566957 6.00373 2.46281 5.9651L5.34201 5.90642C6.17835 5.88938 6.91574 5.35364 7.19039 4.5635L8.13592 1.84334Z"
                        fill="#F2C94C"
                      />
                    </svg>
                  ))}
                </div>
                <span className={styles['price-text']}>Price</span>
                <div className={styles['price-data']}>
                  <span className={styles['price']}>$80</span>
                  <span className={styles['duration']}>For One Day</span>
                </div>
              </div>
            </div>
            <div className={styles['facility']}>
              <h6>Facility</h6>
              <div className={styles['amenities']}>
                <div className={styles['amenity']}>
                  <BiBed size={24} /> <span>4 Beds</span>
                </div>
                <div className={styles['amenity']}>
                  <IoPeopleOutline size={24} /> <span>Bath</span>
                </div>
                <div className={styles['amenity']}>
                  <AiOutlineWifi size={24} /> <span>Wifi</span>
                </div>
                <div className={styles['amenity']}>
                  <RxRulerSquare size={24} /> <span>28M Area</span>
                </div>
                <div className={styles['amenity']}>
                  <FaSmoking size={24} /> <span>Smoking Area</span>
                </div>
                <div className={styles['amenity']}>
                  <MdKitchen size={24} /> <span>Kitchen</span>
                </div>
                <div className={styles['amenity']}>
                  <MdBalcony size={24} /> <span>Balcony</span>
                </div>
                <div className={styles['amenity']}>
                  <CiParking1 size={24} /> <span>Parking Area</span>
                </div>
              </div>
            </div>
            <div className={styles['description']}>
              <h6>Description</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
        <div className={styles['right-section']}>
          <div className={styles['person-wrapper']}>
            <div className={styles['person']}>
              <img
                className={styles['person-img']}
                alt="agent-img"
                src="/person-image.png"
              />
              <h4 className={styles['person-name']}>Hussain Ahmed</h4>
              <span className={styles['person-role']}>Agent</span>
              <div className={styles['person-location']}>
                <IoLocationOutline size={width > 991 ? 24 : 16} />
                <span>North Carolina, USA</span>
              </div>
              <span className={styles['person-properties']}>10 properties</span>
            </div>
            <button type="button" title="message">
              <TbMessage size={width > 991 ? 26 : 16} />
              Message
            </button>
          </div>
          <div className={styles['map']}>
            <img src="/map.png" alt="map" />
            <button className={styles['book-now']}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
