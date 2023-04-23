import PropTypes from 'prop-types';
import { StatsItem } from './StatsItem';
import styles from "./Statistics.module.css"

export function Statistics({ title, stats }) {

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title ? title.toUpperCase() : false}</h2>

      <ul className={styles.statList}>
        
      {stats.map(({ id, label, percentage }) => (
      <StatsItem 
      key={id}
      label={label}
      percentage={percentage}
      />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }),
    ),
  };