import React from "react";
import styled from "styled-components";

//Animations
import {motion} from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Link } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send Us A Message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Send an Email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <Link to="https://twitter.com/FaisalAdams15"><h2>Follow me on twitter😁</h2></Link>
                    </Social>
                </Hide>
            </div>
            <ScrollTop />
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: white;
    min-height: 90vh;
    @media (max-width: 1300px) {
        padding: 2rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: white;
    @media (max-width: 1300px) {
        margin-top: 5rem;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: white;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        color: white;
    }
    h2 {
        margin: 2rem;
        @media (max-width: 1300px) {
        font-size: 2rem;
    }
    }
`

export default ContactUs;