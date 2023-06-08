import styled from "styled-components";
import Fullflix from '../../img/fullflix.jpg'

export const MainContainer = styled.div`
min-height: 100vh;
background-color: #000;
color: #fff;
font-size: 1vw;
`
export const Logo = styled.div`
height: 100vh;
background-image: url(${Fullflix});
background-position: center;
background-size: cover;
`
export const Popular = styled.div`
height: 10vh;
font-size: 4vh;
padding-left: 2vw;
`
export const Grid = styled.div`
display:grid;
width:80%;
justify-content: center;
align-items: center;
min-height:20vh;
grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
margin: auto;
gap: 3vw;

`