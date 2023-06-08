import Footer from "../../Components/Footer/footer";
import { useEffect, useState } from "react";
import { getList } from "../../API/API";
import { Grid, Logo, MainContainer, Popular } from "./Home.style";
import { Card } from "../../Components/Cards/Card";




function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList(setList)
    }, []);
    return (
        <MainContainer>            
            <Logo />     
            <Popular>
                <p>filmes Populares</p>               
            </Popular>
            <Grid>
                {list.map((movie) => (
                    <Card key={movie.id} movie = {movie}/>                  
                ))}
            </Grid>
            <Footer title={"Home"} />
        </MainContainer>
    );
}

export default Home;