import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { EachSectionLayout, DescriptionDiv, ImageDiv } from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <DescriptionDiv>
                <h2>High <span>quality</span> services</h2>

                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock-svg"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork-svg"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm-svg"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt="money-svg"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </DescriptionDiv>
            <ImageDiv>
                <img src={home2} alt="" />
            </ImageDiv>
        </Services>
    )
}

const Services = styled(EachSectionLayout)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`
const Card = styled.div`
    flex-basis: 50%;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServicesSection;