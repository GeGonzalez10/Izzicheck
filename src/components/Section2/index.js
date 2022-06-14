import React, { useState } from "react";
import {Container, Wrap, Row, Col1, TextWrapper, Subtitle, Heading, Img, Col2, ImgWrap} from './S2Elements'
import { BtnWrapper } from '../HomeSection/HomeComponents';
import { Button } from '../ButtonElements';
import Image from '../../images/LaptopDesktop.png'

export const Section2 = ({id, imgStart, heading, description, alt}) => {
    const [hover, setHover] = useState(false)
    const onHover = () => { setHover(!hover) }

    return (
        <>
        <Container id={id}>
            <Wrap>
                <Row imgStart={imgStart}>
                    <Col1>
                        <TextWrapper>
                            <Heading>{heading}</Heading>
                            <Subtitle>{description}</Subtitle>
                        </TextWrapper>
                        <BtnWrapper style={{marginTop:"0"}}>
                            <Button primary to='Contact' onMouseEnter={onHover} onMouseLeave={onHover} spy={true} smooth={true} duration={500}>
                                Iniciar la prueba gratuita
                            </Button>
                            <Button green to='About' spy={true} smooth={true} duration={500} style={{marginLeft:"25px"}}>Conocer más sobre premium</Button>
                        </BtnWrapper>
                    </Col1>
                    <Col2>
                        <ImgWrap> <Img src={Image} alt={alt}/></ImgWrap>
                    </Col2>
                </Row>
            </Wrap>
        </Container>  
        </>
    )
};

export default Section2;