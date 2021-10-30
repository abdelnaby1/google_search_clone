import React, { createContext,useContext,useState } from "react";

const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results,setRresults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('Elon Musk');
    // /video, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
              }
        });

        const data = await response.json();
        if(type.includes('/news')){
            setRresults(data.entries)
        } else if(type.includes('/images')){
            setRresults(data.image_results);
        }
        else{
            setRresults(data.results)
        }
        // console.log(results)
        // setRresults(data);
        setIsLoading(false);

    }
    return (
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext); 