import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import MoviePreview from '../MoviePreview/MoviePreview';
// import Container from '../Container';
import routes from '../../routes';

const HeroesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className="MovieList">
        {movies.map(movie => (
          <li className="MovieListItem" key={movie.id}>
            <Link
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: {
                  from: location,
                },
              }}
            >
              {/* <MoviePreview movie={movie} /> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       poster_path: PropTypes.string,
//     }),
//   ),
//   // location: PropTypes.object.isRequired,
// };

export default HeroesList;
