import React from "react";
import home1 from "../img/home1.png"

//StyledComponent
import { EachSectionLayout as About, DescriptionDiv, HideDiv, ImageDiv } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <DescriptionDiv>
                <div className="title">
                    <HideDiv>
                        <h2> We work to make</h2>
                    </HideDiv>
                    <HideDiv>
                        <h2> your <span>dreams</span></h2>
                    </HideDiv>
                    <HideDiv>
                        <h2>come true</h2>
                    </HideDiv>
                </div>

                <p> Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</p>
                <button>Contact Us</button>
            </DescriptionDiv>

            <ImageDiv>
                <img src={home1} alt=""/>
            </ImageDiv>
        </About>
    )
}


 
export default AboutSection