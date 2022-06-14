import styled from 'styled-components';
import { Colors } from '../styled.colors';
import {Heading} from '../Section2/S2Elements'

let {pink, white} = Colors;

export const ProyectsDiv = styled.div`
background: rgb(54,79,107);
background: linear-gradient(0deg, rgba(54,79,107,1) 0%, rgba(255,255,255,1) 80%);
`

export const ProyectsWrap = styled.div`
display:column; 
z-index:1;
height: 100%;
width: 100%;
justify-content: center;
max-width: 1400px;
margin-right: auto;
margin-left: auto;
padding:0 20px;

media screen and (max-widh: 768px){
    padding: 150px 24px 0px 24px;
}
@media screen and (max-width: 480px){
    padding: 180px 24px 0px 24px;
}
@media (max-width: 991.98px) {
    padding: 200px 24px 0px 24px;
}
`

export const ProyectsContainer = styled.div`
display: flex;
padding: 15px;
column-gap: 20px;
flex-wrap:wrap;
row-gap: 20px;
justify-content: center;
grid-column: 1/-1;

`

export const CardResponsive = styled.div`
display:flex;

flex-direction: column;
row-gap: 10px; 
background-color: transparent;

@media screen and (max-widh: 768px){
    display: block;
}

`

export const ImgWrap = styled.div`
box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
height: 155px;
`

export const Img = styled.img`
width: 330px;
height: 155px;
border-radius: 8px 8px 0px 0px;
max-width: 100%;
object-fit: cover;
`

export const PrWrap = styled.div`
background-color: ${white};
flex-direction: row;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius:0px 0px 10px 10px;
align-items: center;
justify-content: space-between;
padding: 5px;
`

export const expWrap = styled.div`
flex-direction: column; 
row-gap:5px;
`

export const PrTextWrap = styled.div`
flex-direction: row;
width: 320px;
margin-bottom: 10px;
`

export const PrText = styled.div`
column-gap: 10px;
align-items: center;
`

export const Skills = styled.div`
font-size: 22px;
align-items: center;
padding: 0 0 0 15px;
column-gap: 5px;
`

export const H5 = styled.h5`
font-size: 12px;
color: #2c2b2b;
`
export const H = styled(Heading)`
padding-left: 24px;
margin: 50px 5% 50px;
max-width: 1100px;
` 

export const A = styled.a`
cursor: pointer;
text-decoration:none;
list-style:none;
`


export const Subtitle = styled.p`
max-width: 320px;
margin-bottom: 10px;
font-size: 18px;
line-height: 24px;
color: ${({darkText}) =>(darkText ? "#364F6B" : "#F5F5F5")}
`

export const Icon = styled.div`
width: 100px;
font-size: 30px;
justify-content:space-between;
font-weight: 600;
color: ${pink} ;
@media screen and (max-width: 768px){
    font-size: 32px
}
`