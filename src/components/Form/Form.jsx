import { useState } from 'react';
import styles from './Form.module.scss';

const Form = ({ onAdd, isUnique }) => {
  const [hero, setHero] = useState({
    nickname: '',
    realName: '',
    originDescription: '',
    superpowers: '',
    catchPhrase: '',
  });

  const handleChangeHero = e =>
    setHero({
      ...hero,
      [e.target.name]: e.target.value,
    });

  const handleFormSubmit = e => {
    e.preventDefault();
    const newHero = {
      nickname: hero.nickname,
      realName: hero.realName,
      originDescription: hero.originDescription,
      superpowers: hero.superpowers,
      catchPhrase: hero.catchPhrase,
    };
    if (isUnique(hero.nickname)) {
      onAdd(newHero);
      alert(`${hero.nickname} successfully added`);
    }

    resetForm();
  };

  const resetForm = () => {
    setHero({
      nickname: '',
      realName: '',
      originDescription: '',
      superpowers: '',
      catchPhrase: '',
    });
  };

  return (
    <>
      <h2 className={styles.title}>You can add your favorite hero</h2>

      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label className={styles.label}>
          <span className={styles.label__text}>Nickname</span>

          <input
            className={styles.input}
            type="text"
            name="nickname"
            placeholder="Enter nickname"
            value={hero.nickname}
            onChange={handleChangeHero}
            required
          />
        </label>

        <label className={styles.label}>
          <span className={styles.label__text}>Real name</span>

          <input
            className={styles.input}
            type="text"
            name="realName"
            placeholder="Enter real name"
            value={hero.realName}
            onChange={handleChangeHero}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.label__text}>Super powers</span>

          <input
            className={styles.input}
            type="text"
            name="superpowers"
            placeholder="Describe heroe's super powers"
            value={hero.superpowers}
            onChange={handleChangeHero}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.label__text}>Catch phrase</span>

          <input
            className={styles.input}
            type="text"
            name="catchPhrase"
            placeholder="Enter catch phrase"
            value={hero.catchPhrase}
            onChange={handleChangeHero}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.label__text}>Original description</span>

          <input
            className={styles.input}
            type="text"
            name="originDescription"
            placeholder="Enter description"
            value={hero.originDescription}
            onChange={handleChangeHero}
          />
        </label>

        <button type="submit" className={styles.button}>
          Add hero
        </button>
      </form>
    </>
  );
};

export default Form;
