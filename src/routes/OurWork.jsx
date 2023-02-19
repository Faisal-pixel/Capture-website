import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Animations
import {motion} from "framer-motion";
import { pageAnimation, fadePTagandButton, photoAnim, h2UnderLineAnim, slider, sliderContainerAnim } from "../animation";

//Images
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"

const OurWork = () => {
    return(
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainerAnim}>
                <Frame1 variants={slider}/>
                <Frame2 variants={slider}/>
                <Frame3 variants={slider}/>
                <Frame4 variants={slider}/>
            </motion.div>
            
            <Movie>
                <motion.h2 variants={fadePTagandButton}>The Athlete</motion.h2>
                <motion.div variants={h2UnderLineAnim} className="line"></motion.div>
                <Link to="/ourwork/the-athlete">
                    <HideImg><motion.img variants={photoAnim} src={athlete} alt="athlete" /></HideImg>   
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/ourwork/the-racer">
                    <img src={theracer} alt="the racer" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/ourwork/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background-color: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const HideImg = styled.div`
    overflow: hidden;
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-color: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background-color: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`

export default OurWork;