import styled from "styled-components";

import {FaTimes} from "react-icons/fa";
import {Colors} from "../styled.colors";
import {Link as LinkScroll} from 'react-scroll'
// import {Link as LinkRouter} from 'react-router-dom'

let {white, purple, darkBlue, blue} = Colors

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: ${white};
display:grid;
transition: 0.3s ease-in-out;
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
align-items:center;
left:0;
`

export const CloseIcon = styled(FaTimes)`
color: ${purple};
`

export const SidebarIcon = styled.div `
background:transparent;
position:absolute;
right:1.5rem;
outline:none;
font-size:2rem;
top: 1.2rem;
cursor:pointer;
`

export const SidebarWrapper = styled.div`
color: ${purple};
`

export const SidebarMenu = styled.ul`
display:grid;
text-align:center;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);

@media screen and (max-width:480px){
grid-template-rows: repeat(6, 60px);
}
`

export const SidebarLink = styled(LinkScroll)`
display:flex;
justify-content:center;
align-items:center;
transition: 0.2s ease-in-out;
color: ${purple};
cursor:pointer;
font-size:1.5rem;
text-decoration:none;
list-style:none;


&:hover{
    color: ${darkBlue};
    transition: 0.2s ease-in-out;
}
`

export const SidebarBtn = styled.div`
display:flex;
padding:10px;
justify-content: center;
`