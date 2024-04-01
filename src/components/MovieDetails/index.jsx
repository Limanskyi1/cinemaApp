import React from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import './MovieDetails.scss';
export const MovieDetails = () => {
  const { id } = useParams();
  const [data,setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`/films/${id}`)
      .then(({data}) => setData(data))
      .catch((err) => {
        console.log(err);
        setData([]);
      });
  },[]);
  return <div className="details">
    <div className="details__img">
      <img src={data.posterUrl} alt="movie" />
    </div>
    <h2 className="details__country">Countries:</h2>
    <p className="details__year">{data.year}</p>
    <div className="details__genres">
      <span>Genres:<span>1,2,3,4</span></span>
    </div>
    <h3>Rating: {data.ratingKinopoisk}</h3>
  </div>;
};

