import styled from "styled-components";
import {Link} from "react-scroll";


export const Button = styled(Link)`
display:flex;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
background: ${({primary}) => (primary ? "#22E38F" : "transparent")};
white-space: nowrap; 
padding: ${({big}) => (big? "18px 28px" : "15px 15px")};
color: ${({green}) => (green? "#22E38F" : "#F5F5F5")}; 
font-size: ${({fontBig}) => (fontBig? "20px" : "16px")};
outline: none;
font-weight: bold;
border:${({primary}) => (primary? "2px solid #22E38F" : "2px solid #22E38F")};
justify-content: center;
cursor: pointer;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    color: ${({primary}) => (primary ? "#22E38F" : "#F5F5F5")};
    border:${({primary}) => (primary? "2px solid #F5F5F5" : "2px solid #F5F5F5")};
    background:  ${({primary}) => (primary ? "#F5F5F5" : "#22E38F")};
}
`
export const TransparentButton = styled(Button)`
background-color: rgba(255, 255, 255, 0.178);
padding: 8px;
border: none;
box-shadow: none;
&:hover{
    transition: all 0.2s ease-in-out;
    color:#7F1FD4;
    border:none;
    background:  transparent;
}
`

// export const PinkButton = styled(Button)`
// &:hover{
//     background: #de1b56;
// }
// `