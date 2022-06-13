import React from 'react'

import { CardResponsive, ProyectsContainer, ImgWrap, Img, PrWrap, expWrap, PrTextWrap, PrText,H, H5, Icon, Subtitle, ProyectsWrap, ProyectsDiv, A } from './ProyectsElements';


import { proyects } from './ProyectsData';


import CarouselComponent from './Carousel-Img/CarouselComponents';

let {img} = proyects;

export const Proyects = () => {
    return (
        <>
        <ProyectsDiv id='Proyects'> 
            <ProyectsWrap>
                
                <H> Proyectos</H>
                
                <ProyectsContainer>
                {proyects.map(item=>{
                    return (
                        <CardResponsive key={item._id}>
                            <ImgWrap>
                                <Img src={item.img}/>
                            </ImgWrap>
                            <PrWrap>
                                <expWrap>
                                <A href={item.href}><Subtitle darkText='true'>{item.title} {/* <Icon>{item.icon} {item.icon_2}</Icon> */} </Subtitle></A>
                                    <PrTextWrap>
                                        <PrText><H5>{item.pText}</H5></PrText>
                                    </PrTextWrap>
                                </expWrap>
                            </PrWrap>
                        </CardResponsive>
                    )
                })}
                    <CarouselComponent/>
                </ProyectsContainer>     
            </ProyectsWrap>
        </ProyectsDiv>
        </>
    )
};

export default Proyects
