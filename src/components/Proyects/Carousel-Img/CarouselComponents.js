import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import first from "../../../images/NyAssistance.jpg";
import second from "../../../images/NyAssistance1.jpg";
import third from "../../../images/figma-tiendaonline.png";
import forth from "../../../images/Home-tiendaonline.png";
import fifth from "../../../images/Hotels.jpg";
import AppImage from "./AppImage";

const Subtitle = styled.p`
max-width: 320px;
margin-bottom: 10px;
font-size: 18px;
line-height: 24px;
color: white;
`

const forwardArrowAnimation = keyframes`
/* 0%{
    left: 50%;
}
100%{
    left: 90%;
} */
`;

const backwardArrowAnimation = keyframes`
/* 0%{
    left: 50%;
}
100%{
    left: 5%;
} */
`;

const StyledCarouselContainer = styled.div`
  width: 60%;
  height: 60vh;
  margin: 10px 14%;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px){
    margin: 50px 5%;
    width: 480px;
    height: 240px;
    
  };

  @media screen and (max-width: 480px){
    margin: 60px 0;
    width: 320px;
    height: 180px;
    
  };

`;

const StyledArrowContainer = styled.div`
  font-size: 35px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: ${(props) => props.leftPosition};
  position: absolute;
  ${(props) =>
    props.arrowDir === "forward"
      ? css`
          animation: ${forwardArrowAnimation} 1s ease;
          left: 95%;
        `
      : css`
          animation: ${backwardArrowAnimation} 1s ease;
          left: 0%;
        `}
  z-index: 1;
  cursor: pointer;
  :hover {
    background-color: #d9d9d9;
  }

  @media screen and (max-width: 768px){
    ${(props) =>
      props.arrowDir === "forward"
        ? css`
            animation: ${forwardArrowAnimation} 1s ease;
            left: 65vw;
          `
        : css`
            animation: ${backwardArrowAnimation} 1s ease;
            left: -10vw;
          `}
  };

  @media screen and (max-width: 480px){
    ${(props) =>
      props.arrowDir === "forward"
        ? css`
            animation: ${forwardArrowAnimation} 1s ease;
            left: 80vw;
          `
        : css`
            animation: ${backwardArrowAnimation} 1s ease;
            left: -11vw;
          `}
  };

`;

const StyledIndicatorContainer = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
`;

const StyledIndicator = styled.div`
  width: 30px;
  height: 8px;
  margin: 5px;
  background-color: #d9d9d9;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
`;

const images = [first, second, third, forth, fifth];

const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
    setDirection("forward");
  };

  const preImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
    setDirection("backward");
  };

  return (
    <>
      <StyledCarouselContainer>
        {currentImageIndex !== 0 && (
          <StyledArrowContainer
            onClick={preImage}
            leftPosition="20%"
            arrowDir="backward"
          >
            <MdKeyboardArrowLeft />
          </StyledArrowContainer>
        )}
        <AppImage src={images[currentImageIndex]} imageDir={direction} />
        {currentImageIndex !== images.length - 1 && (
          <StyledArrowContainer
            onClick={nextImage}
            leftPosition="90%"
            arrowDir="forward"
          >
            <MdKeyboardArrowRight />
          </StyledArrowContainer>
        )}
      </StyledCarouselContainer>
      
      <StyledIndicatorContainer>
        {images.map((img, index) => (
          <StyledIndicator
            key={img}
            bgColor={index === currentImageIndex ? "#FC5185" : ""}
          />
        ))}
      </StyledIndicatorContainer>
    </>
  );
};

export default CarouselComponent;