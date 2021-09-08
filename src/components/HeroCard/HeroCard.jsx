// import MovieExtraInfo from '../MovieExtraInfo';

// import defaultImg from '../../images/defaultImg.jpeg';

const HeroCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  // const imgURL = poster_path
  //   ? `https://image.tmdb.org/t/p/w500/${poster_path}`
  //   : defaultImg;

  const userScore = vote_average * 10;
  const movieGenres = genres.map(genre => genre.name + ' ');
  const year = release_date.slice(0, 4);

  return (
    <article>
      <div className="MovieCard">
        {/* <img className="MoviePoster" src={imgURL} alt={title} /> */}
        <div>
          <p className="MovieTitle">{`${title} (${year})`}</p>
          <span className="Score">User score : {userScore}%</span>
          <p className="MovieTitle">Overview: {overview}</p>
          <p className="MovieTitle">Genres: {movieGenres}</p>
        </div>
      </div>

      {/* <MovieExtraInfo /> */}
    </article>
  );
};

export default HeroCard;
