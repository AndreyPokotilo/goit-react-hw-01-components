import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem"
import style from "./FriendList.module.css"

export function FriendList({friends}) {
    return <ul className={style.friendList}>
    {friends.map(({avatar, name, isOnline, id})=>(<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}/>))}
  </ul>
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}