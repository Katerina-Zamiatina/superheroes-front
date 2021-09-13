import { useEffect, useState } from 'react';
import { getHeroes, addHero, deleteHero } from '../service/apiService';
import Container from '../components/Container';
import Loader from 'react-loader-spinner';
import HeroesList from '../components/HeroesList';
import LoadMoreButton from '../components/LoadMoreBtn/LoadMoreBtn';
import Form from '../components/Form';

const HomePage = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHeroes();
    // eslint-disable-next-line
  }, []);

  const fetchHeroes = async () => {
    setIsLoading(true);
    try {
      const results = await getHeroes(currentPage);
      setHeroes(prevHeroes => [...prevHeroes, ...results]);
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddHero = async hero => {
    try {
      const newHero = await addHero(hero);
      setHeroes(prevHeroes => [...prevHeroes, newHero]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckUnique = nickname => {
    const existingHero = !!heroes.find(hero => hero.nickname === nickname);
    existingHero && alert(`${nickname} is already exist`);
    return !existingHero;
  };

  const handleDeleteHero = async id => {
    try {
      const result = await deleteHero(id);
      setHeroes(heroes => heroes.filter(hero => hero._id !== id));
      return result;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const shouldRenderBtn = heroes.length > 0 && !isLoading;

  return (
    <Container>
      <Form
        heroes={heroes}
        onAdd={handleAddHero}
        isUnique={handleCheckUnique}
      />
      {heroes ? (
        <HeroesList heroes={heroes} onDelete={handleDeleteHero} />
      ) : (
        <p>Something went wrong: {error.message}</p>
      )}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#4c4e59"
          height={80}
          width={80}
          className="Loader"
        />
      )}
      {shouldRenderBtn && <LoadMoreButton onClick={fetchHeroes} />}
    </Container>
  );
};

export default HomePage;
