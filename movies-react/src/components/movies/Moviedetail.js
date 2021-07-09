import './Moviestyle.css'

export function Moviedetail ({movie}){
    const baseImgUrl = "https://image.tmdb.org/t/p/w185/";

    const title=movie.title;
    const slicedtitle=title.slice(0,22);
    const movietitle=(title.length>22)?(`${slicedtitle} ...`):title;

    const moviereleaseyear=movie.release_date?movie.release_date.slice(0,4):movie.release_date;

    return (
      
            <div className="card" >
                <img className="moviepic" src={movie.poster_path?`${baseImgUrl}${movie.poster_path}`:"./default.png"} alt=""></img>
                <div className="cardbody" >
                    <div className="cardtitle">  
                    <span>{movietitle} </span>
                    </div>
                    <div className="carddetails">
                        <span> Release Date : {movie.release_date}</span>
                        <span>Ratings : {movie.vote_average}    </span>
                    </div>
                    <div className="movie-overview">
                        <span className="cardtitle-overview">{movie.title} ({moviereleaseyear}) </span>
                        <span className="overview-detail">{movie.overview}</span>
                    </div>
                </div>
            </div>
       
    )
}

export default Moviedetail