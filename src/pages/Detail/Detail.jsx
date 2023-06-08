import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import { Grid, MainContainer, RightSide, } from "./Detail.style";
import { Header } from "../../Components/Header/Header";
import { useSelector } from "react-redux";



export function Detail() {
    const state = useSelector((state) => state.Fullflix.movie)

   
   return (
        <MainContainer>
            <Header/>
            <Grid>
            <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt={state.title} width={"300px"} />
            <RightSide>
                <p>Titulo: {state.title}</p>
                <p>Sinopse: {state.overview}</p>
                <p>Data de Lançamento:{state.release_date}</p>
                <p>Nota:{state.vote_average}</p>
                <Link to={"/"}>Voltar para a Home</Link>
            </RightSide>
            </Grid>        
            <Footer title={"Detail"} />
        </MainContainer>
    );
}

export default Detail
