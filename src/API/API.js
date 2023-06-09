import axios from "axios"

export const getList = (setState) =>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e63d70bb597d9acea42110edad3dea89&language=pt-BR")
    .then((response)=>{
        setState(response.data.results)
    }).catch((error)=>{
        console.log(error)
    })
}


    export const getDetail = (id,setState) =>{
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e63d70bb597d9acea42110edad3dea89&language=pt-BR`)
        .then((response)=>{
            setState(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
