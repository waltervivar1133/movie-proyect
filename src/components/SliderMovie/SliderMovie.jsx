import React from "react";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

import "./SliderMovie.scss";

const SliderMovies = (props) => {
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return <Loader />;
  }

  const { results } = movies.result;
  return (
    <Carousel autoplay className="slider-movies">
      {results.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview }
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default SliderMovies;