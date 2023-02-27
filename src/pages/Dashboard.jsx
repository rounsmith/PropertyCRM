import Card from '../components/Dashboard/Card';

import '../styles/components/Card.scss';

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
    <div className="cards">
      {cards.map((item) => (
        <Card data={item} key={item.title} />
      ))}
    </div>
  );
};

export default Dashboard;
