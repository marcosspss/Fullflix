import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import { useEffect, useState } from "react";
import { getList } from "../../API/API";


export function Detail() {
    const [list, setList] = useState([])


    useEffect(() => {
        getList(setList)
    }, [])

    let movie = list[0]

   return (
        <div>          
           <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={"300px"} />

            <Link to={"/"}>
                <button style={{ height: "2vh", width: "2vw" }} title="Home"></button>
            </Link>
            <Footer title={"Detail"} />
        </div>
    )
}

