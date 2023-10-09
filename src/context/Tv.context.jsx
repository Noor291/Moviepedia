import React, {useState, createContext} from 'react'

export const TvContext =createContext();

const TvProvider = ({children}) => {
    const [tv,setTv] =useState({
        id:0,
        name:"",
        overview:"",
        backdrop_path:"",
        poster_path:"",
    })
  
    return (
      <TvContext.Provider
        value={{
          tv,
          setTv
        }}
      >
        {children}
      </TvContext.Provider>
    );
  };
  
  export default TvProvider;