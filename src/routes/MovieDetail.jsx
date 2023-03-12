import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

//Animation
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const {pathname} = useLocation();
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState();

    useEffect(() => {
        const currentMovie = movies.filter(movie => movie.url === pathname)
        setMovie(currentMovie[0])
    }, [movies, pathname])


    return (
        <>
            {movie && <Details>
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="movie" />
                </HeadLine>
                <Awards>
                    {movie.awards.map(award => (
                        <Award title={award.title} description={award.description} key={award.title}/>
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="movie"/>
                </ImageDisplay>
            </Details>}
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    @media (max-width: 1300px) {
        h2 {
            font-size: 3rem;
        }
    }
`

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1300px) {
        display: block;
        margin: 2rem 2rem;
    }
`
const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 1.5rem;
    }
    .line {
        width: 100%;
        background-color: #23d007;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }

`

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    @media (max-width: 1300px) {
        img {
            object-fit: contain;
        }
    }
`
//Award Component
const Award = ({title, description}) => {
    return(
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    )
}

export default MovieDetail;