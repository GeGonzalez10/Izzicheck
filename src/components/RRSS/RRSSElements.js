import styled from "styled-components";
import { Colors } from "../styled.colors";

let {darkBlue, white, blue} = Colors;

export const RRSSContainer = styled.div`
background: #364F6B;
padding-bottom: 50px;
media screen and (max-widh: 768px){
    padding: 100px 0;
}
`
export const TWrapper = styled.div`
max-width: 540px;
padding-top:0;
padding-bottom: 0px;
`


export const Icons = styled.p`
text-shadow: 2px 2px 8px #203956;
max-width: 440px;
margin: 10px;
font-size: 32px;
line-height: 24px;
color: ${({darkText}) =>(darkText ? "#364F6B" : "#F5F5F5")}
`

export const Links = styled.a`
display:flex;
align-items: center;
text-shadow: 2px 2px 8px #203956;
margin:0px 30px;
font-weight: bold;
transition: 0.2s ease-in-out;
color: ${white};
cursor:pointer;
font-size:16px;
text-decoration:none;
list-style:none;

&:hover{
    color: ${blue};
    transition: 0.2s ease-in-out;
}
`