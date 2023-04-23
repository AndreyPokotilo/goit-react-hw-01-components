import PropTypes from 'prop-types';
import style from "./FriendList.module.css"

export function FriendListItem({avatar, name, isOnline}) {
    return (<li className={style.item}>
    <span className={`${style.status} ${style[isOnline]}`}>{isOnline}</span>
    <img className={style.avatar} src={avatar} alt={name} width="48" />
    <p className={style.name}>{name}</p>
  </li>)
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}