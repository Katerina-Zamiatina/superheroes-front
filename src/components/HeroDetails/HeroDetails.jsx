import { useRef } from 'react';
import PropTypes from 'prop-types';
import useDrop from './useDrop';
import useFileReader from './useFileReader';

import styles from './HeroDetails.module.scss';
import defaultImg from '../../img/defaultImg.jpeg';

const HeroDetails = ({ hero, onChange, onSubmit, onChangeImg }) => {
  const ref = useRef(null);

  const { file, active } = useDrop(ref);
  const { fileUrl, isLoading } = useFileReader(file);

  const {
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    img,
  } = hero;
  const image = img ? img : defaultImg;
  const isActive = active ? styles.dropAreaActive : '';
  return (
    <article>
      <div className={styles.card}>
        <img className={styles.poster} src={image} alt={nickname} />
        <h1 className={styles.nickname}>{nickname}</h1>
        <p className={styles.info}>Real name : {realName}</p>
        <p className={styles.info}>Description: {originDescription}</p>
        <p className={styles.info}>Powers: {superpowers}</p>
        <p className={styles.info}>Phrase: {catchPhrase}</p>

        <h2 className={styles.title}>Want to update smth? </h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            <span className={styles.label__text}>Nickname</span>

            <input
              className={styles.input}
              type="text"
              name="nickname"
              placeholder="Enter nickname"
              // value={hero.nickname}
              onChange={onChange}
            />
          </label>

          <label className={styles.label}>
            <span className={styles.label__text}>Real name</span>

            <input
              className={styles.input}
              type="text"
              name="realName"
              placeholder="Enter real name"
              // value={hero.realName}
              onChange={onChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.label__text}>Super powers</span>

            <input
              className={styles.input}
              type="text"
              name="superpowers"
              placeholder="Describe heroe's super powers"
              // value={hero.superpowers}
              onChange={onChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.label__text}>Catch phrase</span>

            <input
              className={styles.input}
              type="text"
              name="catchPhrase"
              placeholder="Enter catch phrase"
              // value={hero.catchPhrase}
              onChange={onChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.label__text}>Original description</span>

            <input
              className={styles.input}
              type="text"
              name="originDescription"
              placeholder="Enter description"
              // value={hero.originDescription}
              onChange={onChange}
            />
          </label>

          <button type="submit" className={styles.button}>
            Update hero
          </button>

          <div>
            <input
              id="upload"
              className={styles.hidden}
              type="file"
              onChange={onChangeImg}
            />
            <div ref={ref} className={`${styles.dropArea} ${isActive}`}>
              {isLoading ? 'loading...' : 'Drop image here or click'}
              <label htmlFor="upload" className={styles.labelImg}></label>
            </div>

            {fileUrl && (
              <div>
                <img src={fileUrl} alt="" className={styles.loadedImg} />
              </div>
            )}
          </div>
          <button type="submit" className={styles.button}>
            Update hero image
          </button>
        </form>
      </div>
    </article>
  );
};

HeroDetails.defaultProps = {
  hero: PropTypes.shape({
    nickname: '',
    realName: '',
    img: defaultImg,
    originDescription: '',
    superpowers: '',
    catchPhrase: '',
  }),
};

HeroDetails.propTypes = {
  hero: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    realName: PropTypes.string,
    vote_average: PropTypes.number,
    img: PropTypes.string,
    originDescription: PropTypes.string,
    catchPhrase: PropTypes.string,
  }),
};

export default HeroDetails;
