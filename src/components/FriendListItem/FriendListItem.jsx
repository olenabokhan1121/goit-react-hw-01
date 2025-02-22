import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ item }) {
  const online = item.isOnline;
  return (
    <div className={css.wrapper}>
      <img className={css.img} src={item.avatar} alt="Avatar" width="48" />
      <p className={css.nickName}>{item.name}</p>
      <p className={clsx(css.status, online ? css.online : css.offline)}>
        {online ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
