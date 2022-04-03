import axios from "axios";
import { createContext, useContext } from "react";
const baseUrl = "https://swapi.dev/api"

const MovieContext = createContext();

export function useMovie(){
    return  useContext(MovieContext);
};

export const MovieProvider = ({children}) => {
    async function getMovies() {
        const response = axios.get(`${baseUrl}/films/`)
        return response
        
    }
    function getCharacters(array){
        const listOfPromises = Promise.all(array.map(async function(item) {
            const getresponse = await axios.get(item)
            return  getresponse;
          }))
        return listOfPromises
    }

    const value = {
        getMovies,
        getCharacters
    }

    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
