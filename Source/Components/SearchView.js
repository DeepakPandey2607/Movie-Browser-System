
import Hero from './Hero';
import { Link } from 'react-router-dom';

const MovieCard= ({movie})=>{
  const posterUrl=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl=`/movies/${movie.id}`
  return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
    <div className="card" >
  <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <Link to={detailUrl} className="btn btn-primary">Get Details</Link>
  </div>
</div>
    </div>
      
  )
}

const SearchView = ({keyword, searchResult}) =>{
  const title=`You are Searching for ${keyword}`

  const resultsHtml=searchResult.map((obj,i)=>{
    return <MovieCard movie={obj} key={i}/>
  })

  console.log(searchResult,"are search results")
    return(
      <>
      <Hero text={title}/>
      {resultsHtml &&
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>
      </div>}
      </>
    );
  }

  export default SearchView;