import styled from 'styled-components'
import{MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import {Link as LinkScroll} from 'react-scroll'

import {Colors} from '../styled.colors';
let {white, green, purple} = Colors;

export const HomeContainer = styled.div `
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
    background: rgb(124,38,209);
    background: linear-gradient(45deg, rgba(124,38,209,1) 0%, rgba(99,90,191,1) 33%, rgba(78,133,176,1) 50%, rgba(42,211,149,1) 78%, rgba(35,225,144,1) 97%);
    display: flex;
    height: 650px;
    position: relative;
    z-index: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 0 ;
 

    :before{
        border-bottom-right-radius: 30%;
        border-bottom-left-radius: 30%;
        content: '';
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(124,38,209);
        background: linear-gradient(45deg, rgba(124,38,209,1) 0%, rgba(99,90,191,1) 33%, rgba(78,133,176,1) 50%, rgba(42,211,149,1) 78%, rgba(35,225,144,1) 97%);
        z-index: 2;
        }
`

export const HomeBg = styled.div`
position: relative;
top: 0;
right:0;
bottom: 0;
left:0;
width: 100%;
height: 100%;
overflow: hidden;
`

// export const ImageBg = styled.img`
// width: 100%;
// height: 100%;
// -o-object-fit: cover;
// object-fit: cover;
// background: #232a34;
// `

export const HomeContent = styled.div`
z-index: 3;
max-width: 900px;
position:absolute;
padding: 8px 10vw;
display: flex;
flex-direction: column;
`

export const ImgContent = styled(HomeContent)`
position: relative;
padding-top: 225px;
justify-content: left;
`

export const H1 = styled.h1`
color: ${white};
font-weight: 400;
font-size: 56px;

@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`
export const Green = styled(H1)`
color: ${green};
`

export const P = styled.p`
color: ${white};
font-weight: 200;
font-size: small;
max-width: 400px;
margin-top: 24px;
text-align: left;

`

export const BtnWrapper = styled.div`
margin-top:30px;
display:flex;
flex-direction:row; 
align-items:center;
`

export const Arrow = styled.div`
  color: ${white};
  font-size: 45px;
//   box-shadow:rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   background-color: #d9d9d9;
`

export const Img = styled.img`
max-width:1100px;
width: 100%;
max-height:
`