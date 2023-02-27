import '../../styles/components/Card.scss';
import DougnutChart from './DougnutChart';

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-left-section">
        <span className="card-text">{data.title}</span>
        <span className="card-totals">{data.number1}</span>
      </div>
      <div className="card-right-section">
        <DougnutChart
          number1={data.number1}
          number2={data.number2}
          color={data.colorToFill}
        />
      </div>
    </div>
  );
};

export default Card;
