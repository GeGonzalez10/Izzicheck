import styled from 'styled-components';
import {Colors} from '../styled.colors';
let {white, green, purple} = Colors;


export const Container = styled.div`
margin:0;
color: #fff;
media screen and (max-widh: 768px){
    padding: 50px 0;
}
`

export const Wrap = styled.div`
display:grid; 
z-index:1;
height: 860px;
width: 100%;
align-items:flex-start;
justify-content: center;
max-width: 1800px;
margin-right: auto;
margin-left: auto;
padding:0 24px;

`

export const Row = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px){
    display: block;
    grid-template-area: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
@media (max-width: 991.98px) {
    margin-top: 5px;
}
@media screen and (max-width: 480px){
    margin-top: 5px;
}
`

export const Col1 = styled.div`
margin-bottom: 5px;
margin-top:10px;
padding: 0 15px;
grid-area: col1;

`

export const Col2 = styled.div`
margin-bottom: 15px;
padding: 0;
grid-area: col2;
z-index:3;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top:0;
padding-bottom: 30px;
`

export const Heading = styled.h1`
padding-top:24px;
margin-bottom: 24px;
font-weight: 400;
font-size: 56px;
line-height: 1.1;
color: ${green};
@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 503px;
font-size: 16px;
line-height: 24px;
color: ${purple};
`

export const ImgWrap = styled.div`
width: 701px;
height: 100%
`

export const Img = styled.img`
width: 100%;
object-fit:cover;
margin: -115px 0 10px 0;
padding-right: 0;
`

