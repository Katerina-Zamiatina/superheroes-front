// import { useState, useEffect } from 'react';
import defaultImg from '../../img/defaultImg.jpeg';
const HeroDetails = hero => {
  const {
    nickname,
    realName,
    originDescription,
    superpowers,
    catchPhrase,
    img,
  } = hero;
  const image = img ? img : defaultImg;
  return (
    <article>
      <div className="HeroCard">
        <img className="HeroImgPoster" src={image} alt={nickname} />
        <h1 className="HeroNick">{nickname}</h1>
        <p className="HeroName">Real name : {realName}</p>
        <p className="HeroDesc">Description: {originDescription}</p>
        <p className="HeroPowers">Powers: {superpowers}</p>
        <p className="HeroPhrase">Phrase: {catchPhrase}</p>
      </div>
    </article>
  );
};

export default HeroDetails;
