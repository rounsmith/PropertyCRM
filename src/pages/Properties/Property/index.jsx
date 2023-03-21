import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { TbMessage } from 'react-icons/tb';

import useWindowSize from '../../../libs/windowSize';

import styles from '../../../styles/components/Property.module.scss';

const Property = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles['property-wrapper']}>
      <div className={styles['navigation']}>
        <button type="button" title="back" className={styles['back']}>
          <IoIosArrowBack size={25} />
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
              <div className={styles['image-overlay']}>
                <img
                  className={styles['smaller-image']}
                  src="/smaller-property-image-2.png"
                  alt="side-image-2"
                />
                <div className={styles['more-images-overlay']}>
                  <span>+10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['details']}>
            <div className={styles['core-details']}>
              <div className={styles['property-data']}>
                <h4 className={styles['property-type']}>Apartment</h4>
                <h3 className={styles['property-name']}>
                  Star Sun Hotel & Apartment
                </h3>
                <div className={styles['property-location']}>
                  <IoLocationOutline size={width > 991 ? 26 : 16} />
                  <span>North Carolina, USA</span>
                </div>
              </div>
              <div className={styles['property-price']}>
                <div className={styles['stars']}></div>
                <span>Price</span>
                <div className={styles['price-data']}>
                  <span className={styles['price']}>$80</span>
                  <span className={styles['duration']}>For One Day</span>
                </div>
              </div>
            </div>
            <div className={styles['facility']}>
              <h6>Facility</h6>
              <div className={styles['amenities']}>
                <div className={styles['amenity']}>icon 4 Beds</div>
                <div className={styles['amenity']}>icon Bath</div>
                <div className={styles['amenity']}>icon Wifi</div>
                <div className={styles['amenity']}>icon 28M Area</div>
                <div className={styles['amenity']}>icon Smoking Area</div>
                <div className={styles['amenity']}>icon Kitchen</div>
                <div className={styles['amenity']}>icon Balcony</div>
                <div className={styles['amenity']}>icon Parking Area</div>
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
          <div className={styles['person']}>
            <img
              className={styles['person-img']}
              alt="agent-img"
              src="/person-image.png"
            />
            <span className={styles['person-name']}>Hussain Ahmed</span>
            <span className={styles['person-role']}>Agent</span>
            <div className={styles['person-location']}>
              <IoLocationOutline size={width > 991 ? 26 : 16} />
              <span>North Carolina, USA</span>
            </div>
            <span className={styles['person-properties']}>10 properties</span>
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
