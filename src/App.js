import React, { useEffect } from 'react';

//f749e32c
const API_URL = 'http://www.omdbapi.com?apikey=f749e32c';
// const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';
// const API_URL = 'https://www.omdbapi.com?apikey=f749e32c&';

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Superman');
  }, []);

  return <div>App</div>;
}

export default App;
