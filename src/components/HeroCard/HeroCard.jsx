import styles from './HeroCard.module.scss';
import defaultImg from '../../img/defaultImg.jpeg';

const HeroCard = ({ nick, img }) => {
  const image = img ? img : defaultImg;

  return (
    <div className={styles.card}>
      <img className={styles.poster} src={image} alt={nick} />
      <h1 className={styles.title}>{nick}</h1>
    </div>
  );
};

export default HeroCard;
