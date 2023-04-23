import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export function TransactionInfo({ type, amount, currency }) {
  return (
    <tr className={`${style.infoItem} ${style[type]}`}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionInfo.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
