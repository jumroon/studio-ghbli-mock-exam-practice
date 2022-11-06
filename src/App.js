import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const filmUrl = "https://ghibliapi.herokuapp.com/films";
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState({});

  useEffect(() => {
    async function loadFilms() {
      try {
        const response = await fetch(filmUrl);
        const someFilms = await response.json();
        setFilms(someFilms);
      } catch (error) {
        console.log(error);
      }
    }
    loadFilms();
  }, []);

  // function onClickHandler(filmImage, filmTitle) {
  //   setImage(filmImage);
  //   setTitle(filmTitle);
  // }

  function onClickHandler(film) {
    setFilm(film);
  }

  const filmTitles = films.map((film, index) => {
    const onClickWithMovie = () => onClickHandler(film);

    return (
      <p key={index}>
        <button onClick={onClickWithMovie}>{film.title}</button>
      </p>
    );
  });

  return (
    <div className="App">
      <h1>Film Titles</h1>
      <h2>{filmTitles}</h2>
      <img src={film.image} title={film.title}></img>
    </div>
  );
}
