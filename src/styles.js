import { motion } from "framer-motion";
import styled from "styled-components";

export const EachSectionLayout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 2rem;
        text-align: center;
    }
`

export const DescriptionDiv = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem;
        }
    }

`

export const ImageDiv = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }

    @media (max-width: 1300px) {
        img {
            width: 100%;
        }
    }
`

export const HideDiv = styled.div`
    overflow: hidden;
`