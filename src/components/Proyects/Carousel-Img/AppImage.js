import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const forwardImageAnimation = keyframes`
0%{
    right: -50%;
}
100%{
    right: 0%;
}
`;

const backwardImageAnimation = keyframes`
0%{
    left: -50%;
}
100%{
    left: 0%;
}
`;

const StyledImageContainer = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items:center;
  ${(props) =>
    props.imageDir === "forward"
      ? css`
          animation: ${forwardImageAnimation} 1s ease;
          right: 0;
        `
      : css`
          animation: ${backwardImageAnimation} 1s ease;
          left: 0%;
        `}

        @media screen and (max-width: 768px){
          width: 490px;
          height: 250px;      
          max-width: 100%; 
        };
      
        @media screen and (max-width: 480px){
          width: 370px;
          height: 195px;
          

          ${(props) =>
            props.imageDir === "forward"
              ? css`
                  animation: ${forwardImageAnimation} 1s ease;
                  right: 0;
                `
              : css`
                  animation: ${backwardImageAnimation} 1s ease;
                  left: -2%;
                `}
        };

`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const AppImage = ({ src, imageDir }) => {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    setCurrentImage(src);
  }, [src]);

  return (
    <>
      {currentImage === src && (
        <StyledImageContainer imageDir={imageDir}>
          <StyledImage src={src} />
        </StyledImageContainer>
      )}
    </>
  );
};

export default AppImage;