import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../data/Apis";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loader/Loader";
import MovieCatalog from "../components/MovieCatalog";
import SliderMovie from '../components/SliderMovie/SliderMovie'
import Pagination from "../components/Pagination/Pagination";


const Home = ()  => {

   const newMovies = useFetch(
   `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
   );

  
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = page => {
    setPage(page);
  };

  return (
    <>

        <SliderMovie movies={newMovies} />

    <Row>
      <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
          Ultimos lanzamientos
        </h1>
      </Col>
      {movieList.results ? (
        <Row>
          <Col span="24">
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span="24">
          <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </Row>
      ) : (
        <Col span="24">
          <Loading />
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>

    </>
  );
}

export default Home