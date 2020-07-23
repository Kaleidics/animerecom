import React from 'react';
import "./AnimeCard.css";

export default class AnimeCard extends React.Component {

    render() {
      let anime = this.props.data;

        return (
            <div className='anime-card'>
                <img class='anime-card__img' src={anime.image_url} alt={anime.title} />
                <div className="anime-card__text-content">
                  <cite className='anime-card__title'>{anime.title}</cite>
                  <p className='anime-card__start-date'>{anime.start_date}</p>
                  <p class='anime-card__episodes'>Episodes: {anime.episodes}</p>
                </div>
                <div class="anime-card__divider" ></div>
                <p className="anime-card__synopsis">{anime.synopsis}</p>
            </div>
        );
    }
}
