import style from "./App.module.css"
import {Profile} from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";

import user from "./Profile/user.json";
import data from "./Statistics/data.json";
import friends from "./Friends/friends.json";
import transactions from "./Transactions/transactions.json"
console.log("transactions:", transactions)

export const App = () => {
  return (
    <div className={style.container}>
      <Profile user={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}