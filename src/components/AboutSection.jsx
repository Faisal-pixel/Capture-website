import React from "react";
import home1 from "../img/home1.png"
import Wave from "./Wave";

import {motion} from "framer-motion"
import { titleAnimation, fadePTagandButton, photoAnim } from "../animation";

//StyledComponent
import { EachSectionLayout as About, DescriptionDiv, HideDiv, ImageDiv } from "../styles";


const AboutSection = () => {
    return (
        <About>
            <DescriptionDiv>
                <motion.div className="title">
                    <HideDiv>
                        <motion.h2 variants={titleAnimation} > We work to make</motion.h2>
                    </HideDiv>
                    <HideDiv>
                        <motion.h2 variants={titleAnimation}> your <span>dreams</span></motion.h2>
                    </HideDiv>
                    <HideDiv>
                        <motion.h2 variants={titleAnimation}>come true</motion.h2>
                    </HideDiv>
                </motion.div>

                <motion.p variants={fadePTagandButton}> Contact us for any photography or videography ideas that you have. We have professionals with amazing skills</motion.p>
                <motion.button variants={fadePTagandButton}>Contact Us</motion.button>
            </DescriptionDiv>

            <ImageDiv>
                <motion.img variants={photoAnim} src={home1} alt=""/>
            </ImageDiv>
            <Wave />
        </About>
    )
}


 
export default AboutSection