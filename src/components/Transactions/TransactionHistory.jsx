import PropTypes from 'prop-types';
import { TransactionInfo } from './TransactionInfo';
import style from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  console.log('transactions:', items);
  return (
    <table className={style.transactionHistory}>
      <thead className={style.thead}>
        <tr className={style.theadItem}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionInfo
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
