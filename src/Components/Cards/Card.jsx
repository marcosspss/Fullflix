import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieInfo } from "../../redux/FullflixSlice";
import { getDetail } from "../../API/API";
import { MainContainer } from "./Card.style";


export const Card = ({ movie }) =>{
    const [movieDetail, setMovieDetail] = useState()
    const dispath = useDispatch();  
    const onHoverDetail = (e) =>{        
    getDetail(e.target.id, setMovieDetail)
    }

    useEffect(() => {
        dispath(getMovieInfo(movieDetail))}, [dispath,movieDetail])

    return (
        <MainContainer to={"Detail"} id={movie.id} onMouseEnter={onHoverDetail}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                id={movie.id} />

                  <div className="InfoContainer">
                <h4>Titulo: {movie.title}</h4>
                <h4>nota: {movie.vote_average}</h4>
            </div>


          
        </MainContainer>
    );
}
