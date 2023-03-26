
import { useState } from 'react';
import './App.css';


function MovieCard({ movie }) {
  return (
    <div className="movie" >
    <div class="card-m"style={{"width": "18rem"}}>
    <img src={movie.poster} class="card-img-top d-flex flex-row" alt={movie.title}/>
      <div class="card-body">
      <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
          <p>Genre: {movie.genre.join(', ')}</p>
          <p>Rating: {movie.rating}</p>
      </div>
    </div>
    </div>
    
     
      
  
  );

}
function App() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDirector, setSelectedDirector] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [movielist, setMovieList] = useState([]);
  const [show, setShow] = useState(false);

  const movies = [
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      genre: ['Crime', 'Drama'],
      rating: 9.2,
      poster:"https://w0.peakpx.com/wallpaper/384/602/HD-wallpaper-the-godfather.jpg",
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      genre: ['Drama'],
      rating: 9.3,
      poster:"https://wallpapercave.com/wp/wp2014276.jpg",
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      genre: ['Action', 'Crime', 'Drama'],
      rating: 9.0,
      poster:"https://www.themoviedb.org/t/p/original/eP5NL7ZlGoW9tE9qnCdHpOLH1Ke.jpg",
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      genre: ['Action', 'Adventure', 'Drama'],
      rating: 9.0,
      poster:"https://wallpapercave.com/wp/wp4119604.jpg",
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      genre: ['Crime', 'Drama'],
      rating: 8.9,
      poster:"https://www.antikbar.co.uk/catalogue/images/PC1370_1_m.jpg",
    },
    {
      title: 'Forrest Gump',
      year: 1994,
      director: 'Robert Zemeckis',
      genre: ['Drama', 'Romance'],
      rating: 8.8,
      poster:"https://pics.filmaffinity.com/Forrest_Gump-309804657-large.jpg",
    },
    {
      title: 'Inception',
      year: 2010,
      director: 'Christopher Nolan',
      genre: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 8.7,
      poster:"https://rukminim1.flixcart.com/image/416/416/kmmcrrk0/poster/7/9/1/medium-inception-poster-poster-for-decoration-poster-for-room-original-imagfh7vghgqjgru.jpeg?q=70",
    },
    {
      title: 'The Matrix',
      year: 1999,
      director: 'Lana Wachowski, Lilly Wachowski',
      genre: ['Action', 'Sci-Fi'],
      rating: 8.7,
      poster:"https://cdn.shopify.com/s/files/1/1416/8662/products/matrix_1999_quad_original_film_art.jpg?v=1609378683",
    },
    {
      title: "Schindler's List",
      year: 1993,
      director: 'Steven Spielberg',
      genre: ['Biography', 'Drama', 'History'],
      rating: 8.9,
      poster:"https://rukminim1.flixcart.com/image/416/416/knunf680/poster/z/u/c/medium-schindler-s-list-movie-wall-poster-for-room-with-gloss-original-imag2g3a4cgq7uhc.jpeg?q=70",

    },
    {
      title: 'The Silence of the Lambs',
      year: 1991,
      director: 'Jonathan Demme',
      genre: ['Crime', 'Drama', 'Thriller'],
      rating: 8.6,
      poster:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/01/IMG_5247-scaled.jpeg",
    },
  ];

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleDirectorChange = (event) => {
    setSelectedDirector(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const generateMovie = () => {
    // Filter movies based on selected criteria
    const filteredMovies = movies.filter((movie) => {
      if (selectedYear && movie.year !== parseInt(selectedYear)) return false;
      if (
        selectedDirector &&
        !movie.director.toLowerCase().includes(selectedDirector.toLowerCase())
      )
        return false;
      if (selectedGenre && !movie.genre.includes(selectedGenre)) return false;
      if (selectedRating && movie.rating !== parseFloat(selectedRating)) return false;  
      return true;
    });
    
    // Randomly select a movie from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredMovies.length);
    const randomMovie = filteredMovies[randomIndex];
    filteredMovies.length >0 ?     setShow(true)  : setShow(false)

    setMovieList(randomMovie)
    
    
  

  };
  

  return (
  <div className="App">
    
      
        <h1 class="heading">Movie Genie App</h1>
     
  
  <div class="card d-flex flex-row">
  
  <div class="card-body">
    <h5 class="card-title">Movie Generator</h5>
    <p class="card-text">Here You Can Get Your favourite Movies</p>
    
 
      <form class="form">
        <table>
          <tr>
            
            <td>
                <select class ="select" placeholder="movie year"  value={selectedYear} onChange={handleYearChange} >
                <option value="">select Year</option>
                <option value="1972">1972</option>
                <option value="1994">1994</option>
                <option value="2008">2008</option>
                <option value="2003">2003</option>
                <option value="1994">1994</option>
                <option value="1994">1994</option>
                <option value="2010">2010</option>
                <option value="1999">1999</option>
                <option value="1993">1993</option>
                <option value="1991">1991</option>
                </select>
                
            </td> 
          </tr>
          <tr>
             
              <td>
                <select class="select" type="text" placeholder="Director name" value={selectedDirector} onChange={handleDirectorChange} >
                <option value="">select</option>
                <option value="Francis Ford Coppola">Francis Ford Coppola</option>
                <option value="Frank Darabont">Frank Darabont</option>
                <option value="Christopher Nolan">Christopher Nolan</option>
                <option value="Peter Jackson">Peter Jackson</option>
                <option value="Quentin Tarantino">Quentin Tarantino</option>
                <option value="Robert Zemeckis">Robert Zemeckis</option>
                <option value="Christopher Nolan">Christopher Nolan</option>
                <option value="Lana Wachowski, Lilly Wachowski">Lana Wachowski, Lilly Wachowski</option>
                <option value="Steven Spielberg">Steven Spielberg</option>
                <option value="Jonathan Demme">Jonathan Demme</option>
                </select>
              </td> 
          </tr>
          <tr>
              
            <td>
                <input type="number" placeholder="Rating" step="0.1" value={selectedRating} onChange={handleRatingChange} />   
            </td>
          </tr>
          <tr>  
                 
                <label>Genre:</label>
                <select class="select" value={selectedGenre} onChange={handleGenreChange}>
                <option value="">All</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Biography">Biography</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="History">History</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                </select>
          </tr>
        
        </table>
      </form>
      <button class="button" onClick={generateMovie}>Generate Movie</button>
    </div>
    </div>

  {
    show  ? <MovieCard movie={movielist}/> : ""
    
  }
  </div>
  
  );
  }
  
  export default App;