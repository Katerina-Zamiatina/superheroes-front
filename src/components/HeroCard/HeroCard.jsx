const HeroCard = ({ nick, desc, name, powers, phrase, img }) => {
  return (
    <article>
      <div className="HeroCard">
        {/* <img className="HeroImgPoster" src={img} alt={nick} /> */}
        <div>
          <p className="HeroNick">{nick}</p>
          <p className="HeroName">Real name : {name}</p>
          <p className="HeroDesc">Description: {desc}</p>
          <p className="HeroPowers">Powers: {powers}</p>
        </div>
      </div>
    </article>
  );
};

export default HeroCard;
