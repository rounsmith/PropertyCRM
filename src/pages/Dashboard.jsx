import Card from '../components/Dashboard/Card';
import TotalRevenue from '../components/Dashboard/TotalRevenue/TotalRevenue';
import PropertyReferrals from '../components/Dashboard/PropertyReferrals/PropertyReferrals';
import PropertyList from '../components/Dashboard/PropertyList/PropertyList';

import '../styles/components/Dashboard.scss';

const Dashboard = () => {
  const cards = [
    {
      title: 'Properties For Sale',
      number1: 684,
      number2: 316,
      colorToFill: '#475BE8',
    },
    {
      title: 'Properties For Rent',
      number1: 546,
      number2: 500,
      colorToFill: '#FD8539',
    },
    {
      title: 'Total Customer',
      number1: 5732,
      number2: 1200,
      colorToFill: '#2ED480',
    },
    { title: 'Total City', number1: 90, number2: 20, colorToFill: '#FE6D8E' },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="top-dashboard-section">
        {cards.map((item) => (
          <Card data={item} key={item.title} />
        ))}
      </div>
      <div className="mid-dashboard-section">
        <TotalRevenue />
        <PropertyReferrals />
      </div>
      <div className="bottom-dashboard-section">
        <PropertyList />
      </div>
    </div>
  );
};

export default Dashboard;
