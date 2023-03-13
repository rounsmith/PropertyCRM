import BarChart from './BarChart';

import styles from '../../../styles/components/TotalRevenue.module.scss';

const TotalRevenue = () => {
  return (
    <div className={styles['total-revenue']}>
      <div className={styles['topData']}>
        <div className={styles['top']}>
          <div className={styles['title']}>Total Revenue</div>
          <div className={styles['bar-colors']}>
            <div className={styles['last-month']}>
              <div className={styles['color']} />
              <span>Last Month</span>
            </div>
            <div className={styles['running-month']}>
              <div className={styles['color']} />
              <span>Running Month</span>
            </div>
          </div>
        </div>
        <div className={styles['total-revenue-numbers']}>
          <span>$236.535</span>
          <div className={styles['percentage']}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="20" rx="10" fill="#475BE8" />
              <path
                d="M6.91046 9.30885C6.70218 9.52478 6.36449 9.52478 6.15621 9.30885C5.94793 9.09292 5.94793 8.74283 6.15621 8.5269L9.24575 5.32389C9.66231 4.89204 10.3377 4.89204 10.7542 5.32389L13.8438 8.5269C14.0521 8.74283 14.0521 9.09292 13.8438 9.30885C13.6355 9.52478 13.2978 9.52478 13.0895 9.30885L10.5333 6.65876V14.4471C10.5333 14.7524 10.2946 15 10 15C9.70545 15 9.46667 14.7524 9.46667 14.4471V6.65876L6.91046 9.30885Z"
                fill="#FCFCFC"
              />
            </svg>
            <div className={styles['number']}>
              <span>0.8%</span>
              <span>Than last Month</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['barchart']}>
        <BarChart />
      </div>
    </div>
  );
};

export default TotalRevenue;
