import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";

const Nav = () => {
    const { pathname } = useLocation();
    return(
        <StyledNav>
            <h1 id="logo"><Link to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <NavLine transition={{ duration: 0.75 }} initial={{ width: "0%"}} animate={{width: pathname === "/" ? "50%" : "0%"}}/>
                </li>
                <li>
                    <Link to="/ourwork">2. Our Work</Link>
                    <NavLine transition={{ duration: 0.75 }} initial={{ width: "0%"}} animate={{width: pathname === "/ourwork" ? "50%" : "0%"}}/>
                </li>
                <li>
                    <Link to="/contactus">3. Contact Us</Link>
                    <NavLine transition={{ duration: 0.75 }} initial={{ width: "0%"}} animate={{width: pathname === "/contactus" ? "50%" : "0%"}}/>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav `
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;

        li {
            padding-left: 10rem;
            position: relative;
        }
    }

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 0rem;
        #logo {
            display: inline-block;
            margin-bottom: 1rem;
        }
        ul {
            padding: 1rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding-left: 0;
            }
        }
    }
`

const NavLine = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width: 1300px) {
        left: 0%;
    }
` 

export default Nav;