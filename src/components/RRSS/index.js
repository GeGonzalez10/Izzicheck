import React from 'react'

import {AboutWrap, AboutRow, Col1, TopLine, Subtitle, TextWrapper,Heading, Img, Col2, ImgWrap} from './../AboutMe/AboutElements'
import { RRSSContainer, TWrapper, Icons, Links} from './RRSSElements';

import Image from '../../images/RRSS.svg'
import {VscGithub, VscLocation, VscTwitter} from 'react-icons/vsc'
import {GrLinkedinOption} from 'react-icons/gr'


export const RRSS = ({id, imgStart, topLine, lightText, heading, darkText, description, alt}) => {
    return (
        <>
        <RRSSContainer id={id}>
            <AboutWrap>
                <AboutRow imgStart={imgStart}>
                    <Col1>
                        <TWrapper>
                            <TopLine >{topLine}</TopLine>
                            <Heading lightText={lightText}>{heading}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TWrapper>
                      
                        <TextWrapper>
                                <Links href="https://github.com/GeGonzalez10"><Icons darkText={darkText}><VscGithub/></Icons>GeGonzalez10</Links>

                                <Links href="https://linkedin.com"><Icons darkText={darkText}><GrLinkedinOption/></Icons>in/GeGonzalez10/</Links>
                            
                                <Links href="https://www.google.com/maps/place/Caracas,+Distrito+Capital/@10.4683612,-67.0304525,11z/data=!3m1!4b1!4m5!3m4!1s0x8c2a58adcd824807:0x93dd2eae0a998483!8m2!3d10.4805937!4d-66.9036063"><Icons darkText={darkText}><VscLocation/></Icons>Caracas, Venezuela - Remote</Links>

                                <Links href="https://twitter.com/GGonzalez1_9"><Icons darkText={darkText}><VscTwitter/></Icons>@GGonzalez1_9</Links>
                        </TextWrapper>
                    </Col1>
                    <Col2>
                        <ImgWrap> <Img src={Image} alt={alt}/></ImgWrap>
                    </Col2>
                </AboutRow>
            </AboutWrap>
        </RRSSContainer> 
        </>
    )
};
