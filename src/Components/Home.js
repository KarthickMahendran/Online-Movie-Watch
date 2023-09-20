import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import MovieBox from "./MovieBox";
import Pages from "./Pages";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [list, setList] = useState();
  const [textQuery, setTextQuery] = useState("");
  const [noDataFound, setNoDataFound] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getList();
    const token = localStorage.getItem("newtoken");
    if (token == null) {
      navigate("/");
    }
  }, [page]);

  const getList = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c8b96233ba510996d624e85f81c2b795&language=en-US&page=${page}`
      )
      .then(({ data }) => {
        setList(data.results);
        console.log(data.results);
      });
    fetchData();
  };

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  };

  const searchMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c8b96233ba510996d624e85f81c2b795&language=en-US&query=${textQuery}`
    );
    const data = await response.data.results;
    setList(data);
    if (data.length === 0) {
      setNoDataFound(true);
    }
    fetchData();
  };

  const onChangeHandler = (e) => {
    setTextQuery(e.target.value, "handler");
  };

  return (
    <div>
      <Header onChangeHandler={onChangeHandler} searchMovie={searchMovie} />
      <section>
        <div class="body">
          <div class="bg_img">
            <div class="containter">
              <div class="row">
                <div class="col-lg-9 ms-auto mx-auto intro">
                  <p class="para">Welcome to Our movie site</p>
                  <h1 class="head">Our special <span>Movies</span></h1>
                  <p class="para1">We are Showing 100+ Movies on online <br />without the ad breaks, and watch from where ever your. <br />We are <strong>Happy to be your!</strong> part of <strong>Happiness</strong>.</p>
                  <p class="read"><Link to="">Read More</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="list bg_color">
          <div>
            <p className="trend"> Trending </p>
          </div>
          {noDataFound && (
            <div className="nodatacont">
              <h1 className="nodata">NO Data Found</h1>
            </div>
          )}
          <div className="container">
            {isLoading ? (
              ""
            ) : (
              <div className="grid">
                {list && list.map((movie) => <MovieBox list={movie} />)}
              </div>
            )}
            {isLoading ? (
              <div>
                <h4 className="fetch">Fetching Your Movie...!!</h4>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <ToastContainer />
        <Pages page={page} setPage={setPage} />
      </section>
    </div>
  )
};

export default Home