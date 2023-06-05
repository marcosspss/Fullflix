import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import { useEffect, useState } from "react";
import { getList } from "../../API/API";
import { Logo, MainContainer } from "./Home.style";




function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList(setList)
    }, []);
    return (
        <MainContainer>

            
            <Logo />          
            
            <div>
                <h1>filmes Populares</h1 >               

            </div>
            <div>
                {list.map((movie) => (
                    <div>
                        <Link to={"Detail"}>
                        <h2>{movie.title}</h2>
                        </Link>
                        <Link to={"Detail"}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={"300px"} />
                        </Link>
                                     
                    </div>
                    
                ))}
            </div>
            <Footer title={"Home"} />
        </MainContainer>
    )
}

export default Home;