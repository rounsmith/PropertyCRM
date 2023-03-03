import React from 'react';
import '../../../styles/components/PropertyReferrals.scss';
const PropertyReferrals = () => {
  return (
    <div className="referrals-wrapper">
      <div className="title">Property Referrals</div>
      <div className="referrals">
        <div className="referral">
          <div className="referrals-title">
            <span>Social Media</span>
            <span>64%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-width"
              style={{ width: '64%', backgroundColor: '#6C5DD3' }}
            />
          </div>
        </div>
        <div className="referral">
          <div className="referrals-title">
            <span>MarketPlaces</span>
            <span>40%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-width"
              style={{ width: '40%', backgroundColor: '#7FBA7A' }}
            />
          </div>
        </div>
        <div className="referral">
          <div className="referrals-title">
            <span>Websites</span>
            <span>50%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-width"
              style={{ width: '50%', backgroundColor: '#FFCE73' }}
            />
          </div>
        </div>
        <div className="referral">
          <div className="referrals-title">
            <span>Digital Ads</span>
            <span>80%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-width"
              style={{ width: '80%', backgroundColor: '#FFA2C0' }}
            />
          </div>
        </div>
        <div className="referral">
          <div className="referrals-title">
            <span>Others</span>
            <span>15%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-width"
              style={{ width: '15%', backgroundColor: '#F45252' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyReferrals;
