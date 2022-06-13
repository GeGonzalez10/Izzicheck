import React, {useState} from 'react'
import { SquareButton } from '../ButtonElements'

import Video from '../../videos/video.mp4'
import {HomeContainer, HomeBg, VideoBg, HomeContent,  H1, P, Pink, BtnWrapper, ArrowForward, ArrowRight, ReadMoreLink} from './HomeComponents'

export const HomeSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => { setHover(!hover) }

    return (
        <>
        <HomeContainer id='Home'> 
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBg>
            <HomeContent>
                <H1>Hola👋, soy Genesis González </H1>
                <P>Estudiante de Ingeniería Electrónica y entusiasta del <Pink>Desarrollo Web - Frontend</Pink></P>
                <BtnWrapper>
                    <SquareButton to='Contact' onMouseEnter={onHover} onMouseLeave={onHover} spy={true} smooth={true} duration={500}>
                        Contáctame {hover ? <ArrowForward/> : <ArrowRight/>}
                    </SquareButton>
                    <ReadMoreLink to='About' spy={true} smooth={true} duration={500}>Leer más</ReadMoreLink>
                </BtnWrapper>
            </HomeContent>
        </HomeContainer>  
        </>
    )
}
