import DougnutChart from './DougnutChart';

import styles from '../../../styles/components/Card.module.scss';

const Card = ({ data }) => {
  return (
    <div className={styles['card-data']}>
      <div className={styles['card-left-section']}>
        <span className={styles['card-text']}>{data.title}</span>
        <span className={styles['card-totals']}>{data.number1}</span>
      </div>
      <div className={styles['card-right-section']}>
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
