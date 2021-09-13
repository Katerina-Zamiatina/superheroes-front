import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHeroById, updateHero } from '../service/apiService';
import Container from '../components/Container';
import Loader from 'react-loader-spinner';
import HeroDetails from '../components/HeroDetails';

// import routes from '../routes';

const HeroPage = () => {
  const location = useLocation();
  const heroId = location.pathname.split('/').slice(-1);

  const [hero, setHero] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHeroById();
    // eslint-disable-next-line
  }, []);

  const fetchHeroById = async () => {
    setIsLoading(true);
    try {
      const resHero = await getHeroById(`${heroId}`);
      setHero(resHero);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateHero = async (id, credentials) => {
    try {
      const updatedHero = await updateHero(id, credentials);
      setHero(updatedHero);
      return updatedHero;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateImg = async (id, credentials) => {
    try {
      const updatedHero = await updateHero(id, credentials);
      setHero(prevHero => [...prevHero, updatedHero]);
      return updatedHero;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeHero = e => {
    setHero({ ...hero, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const updatedHero = {
      ...hero,
      nickname: hero.nickname,
      realName: hero.realName,
      originDescription: hero.originDescription,
      superpowers: hero.superpowers,
      catchPhrase: hero.catchPhrase,
    };

    handleUpdateHero(heroId, updatedHero);
    alert(`${hero.nickname} successfully updated`);
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
    <Container>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#4c4e59"
          height={80}
          width={80}
          className="Loader"
        />
      )}
      {hero && (
        <HeroDetails
          hero={hero}
          onChange={handleChangeHero}
          onSubmit={handleFormSubmit}
          onChangeImg={handleUpdateImg}
        />
      )}

      {error && <p>Something went wrong: {error.message}</p>}
    </Container>
  );
};

export default HeroPage;
