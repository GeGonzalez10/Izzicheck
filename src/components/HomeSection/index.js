import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Button, TransparentButton } from '../ButtonElements'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {HomeContainer, HomeBg, VideoBg, HomeContent,  H1, P, Green, BtnWrapper, Arrow} from './HomeComponents'


export const HomeSection = () => {    
const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const next = () => {
    setCurrentTextIndex((prevIndex) => prevIndex + 1);
    setDirection("forward");
  };

  const prev = () => {
    setCurrentTextIndex((prevIndex) => prevIndex - 1);
    setDirection("backward");
  };
  
    const [hover, setHover] = useState(false)
    const onHover = () => { setHover(!hover) }

    const Content = [
        {
        primaryText: "Chequea",
        secondaryText: "fácil y rápido",
        p: "Solucione tecnológicas - financieras enfocadas a la innovación y eficiencia, generando recursos adaptados a tus necesidades con el fin de automatizar los procesos y maximizar tu productividad. "
        },
        {
        primaryText: "No pagues %",
        secondaryText: "por cada transacción que recibes.",
        P:" "
        },
        {
        primaryText: "Valida los pagos (zelle)",
        secondaryText: "recibidos, al instante y de manera segura.",
        p:" "
        },
    ];

    return (
        <>
        <HomeContainer id='Home'> 
            <HomeBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> Si podemos usar la imagen de adobe xd de fondo iría aquí*/}
            </HomeBg>
             <HomeContent>
                <BtnWrapper style={{position:"absolute", top:150, left:40}}>
                {currentTextIndex !== 0 && (
                    <Arrow
                    onClick={prev}
                    arrowDir="backward">
                        <MdKeyboardArrowLeft/>
                    </Arrow>
                )}
                 {currentTextIndex !== Content.length - 1 && (
                    <Arrow
                    style={{position:"absolute", left:700}}
                    onClick={next}
                    arrowDir="forward">
                        <MdKeyboardArrowRight/>
                    </Arrow>
                )}
                </BtnWrapper>
                <BtnWrapper style={{margin:"1.5rem"}}>
                    <TransparentButton>10 transacciones al mes GRATIS</TransparentButton>
                </BtnWrapper>
                <H1><Green>{Content[currentTextIndex].primaryText}</Green>{Content[currentTextIndex].secondaryText}</H1>
                <P>{Content[currentTextIndex].p}</P>
                <BtnWrapper>
                    <Button primary to='Contact' onMouseEnter={onHover} onMouseLeave={onHover} spy={true} smooth={true} duration={500}>
                        Iniciar la prueba gratuita
                    </Button>
                    <Button to='About' spy={true} smooth={true} duration={500} style={{marginLeft:"25px"}}>Conocer más sobre premium</Button>
                </BtnWrapper>
            </HomeContent>
        </HomeContainer>  
        </>
    )
}
