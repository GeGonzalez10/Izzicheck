import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Colors} from '../styled.colors'

let {green, white} = Colors;

export const Nav = styled.nav`
background: transparent;
height: 80px;
display:flex;
justify-content:center;
align-items:center;
width: 100%;
font-size: 1rem;
letter-spacing: 1px;
position: absolute;
top:0;
z-index:10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease; 
}
`

export const NavbarContainer = styled.div`
background: rgb(127,32,212);
background: linear-gradient(80deg, rgba(127,32,212,0.4906337535014006) 10%, rgba(82,123,179,0.5270483193277311) 27%, rgba(62,168,164,0.6250875350140056) 45%, rgba(52,190,156,0.4962359943977591) 67%, rgba(35,225,144,0.5242471988795518) 100%);
position: fixed;
display:flex;
justify-content:space-around;
width:100%;
padding: 0 30px;
height:80px;
z-index:1;
`

export const NavLogo = styled(LinkScroll)`
display:flex;
margin: 0;
padding: 0 45px;
color: ${white};
font-size: 1rem;
align-items:center;
font-weight: bold;
text-decoration:none;
justify-self: flex-end;
cursor: pointer;

@media screen and (max-width:335px){
    font-size: 1rem;
}
`
export const Img = styled.img`
width: 100%;
max-width:74px;
height: 100%;
max-height:74px;
`

export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 915px) {
    color: ${white};
        display: block;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
}
    
    @media screen and (max-width:768px) {
        color: ${white};
        display: block;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
    }

    @media screen and (max-width:335px){
        color: ${white};
        display: block;
        margin-top:5px;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor:pointer;
    }

`

export const NavMenu = styled.ul `
display:flex;
align-items: center;
list-style: none;
text-align:center;


// For tablets
@media screen and (max-width: 915px) {
    display:none;
}

@media screen and (max-width:768px) {
    display: none; 
}
`

export const NavItem = styled.li `
height: 80px;
`

export const NavLinks = styled(LinkScroll)`
font-weight: 200;
font-size: small;
color: ${white};
padding: 0 1rem;
height: 100%;
cursor:pointer;
display: flex;
text-decoration: none;
align-items: center;

    &.active{
        border-bottom: ${p=>p.borderBottom || "3px solid #22E38F"};
    }
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 915px) {
    display:none;
}

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtnLink = styled(LinkScroll)`
    background: transparent;
    color:${white};
    font-size:small;
    font-weight: bold;
    outline:none;
    border: 2px solid ${white};
    border-radius: 8px;
    padding: 10px 22px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    cursor:pointer;
        
        &:hover{
            transition: all 0.2s ease-in-out;
            background: ${white};
            color:${green};
        }
    `

