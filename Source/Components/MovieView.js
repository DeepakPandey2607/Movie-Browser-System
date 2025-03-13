import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Hero from './Hero';

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b08710330799c9dbc44a7327e45e2411`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch movie details");
            }
            return response.json();
        })
        .then(data => {
            if (isMounted) {
                setMovieDetails(data);
                setIsLoading(false);
            }
        })
        .catch(error => {
            if (isMounted) {
                console.error(error);
                setIsLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [id]);

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading. . ." />;
        }

        if (!movieDetails.original_title) {
            return <Hero text="Movie not found" />;
        }

        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
        
        return (
            <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return renderMovieDetails();
};

export default MovieView;
