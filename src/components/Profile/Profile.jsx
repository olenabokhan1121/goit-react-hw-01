import css from './Profile.module.css';
export default function Profile(props) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={props.image} alt="User avatar" />
        <p className={css.userName}>{props.name}</p>
        <p className={css.text}>{props.tag}</p>{' '}
        <p className={css.text}>{props.location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listText}>Followers</span>
          <span className={css.listData}>{props.stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listText}>Views</span>
          <span className={css.listData}>{props.stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listText}>Likes</span>
          <span className={css.listData}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
