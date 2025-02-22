import css from './Profile.module.css';
export default function Profile(props) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={props.image} alt="User avatar" />
        <p>{props.name}</p>
        <p>{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
