import type { FC } from 'react';

import styles from './circle-progress.module.scss';

interface IProps {
  percent: number;
}

const CircleProgress: FC<IProps> = ({ percent }) => {
  const size = 60;
  const strokeWidth = 5;
  const trailStrokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(Math.max(percent, 0), 100) / 100) * circumference;

  return (
    <div className={styles['circle-progress__wrap']}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='rgba(255, 255, 255, 0.35)'
          strokeWidth={trailStrokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='#ffffff'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 0.25s ease' }}
        />
      </svg>
      <span className={styles['circle-progress__text']}>{percent}%</span>
    </div>
  );
};

export default CircleProgress;
