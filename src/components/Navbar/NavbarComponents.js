import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {Colors} from '../styled.colors'

let {pink, white} = Colors;

export const Nav = styled.nav`
background: linear-gradient(90deg, rgba(63,193,201,1) 1%, rgba(54,79,107,1) 40%, rgba(44,68,94,1) 100%);
height: 80px;
display:flex;
justify-content:center;
align-items:center;
width: 100%;
font-size: 1rem;
letter-spacing: 1px;
position: relative;
top:0;
z-index:10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease; 
}
`

export const NavbarContainer = styled.div`
background: linear-gradient(90deg, rgba(63,193,201,1) 1%, rgba(54,79,107,1) 40%, rgba(44,68,94,1) 100%);
box-shadow:0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
position: fixed;
display:flex;
justify-content:space-between;
width:100%;
padding: 0 24px;
height:80px;
z-index:1;
`

export const NavLogo = styled(LinkScroll)`
display:flex;
color: ${white};
font-size: 1.5rem;
align-items:center;
margin-left:24px;
font-weight: bold;
text-decoration:none;
justify-self:flex-start;
cursor: pointer;

@media screen and (max-width:335px){
    font-size: 1rem;
}
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
margin-right: -22px;

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
font-weight: bold;
font-size: 1.1rem;
color: ${white};
padding: 0 1rem;
height: 100%;
cursor:pointer;
display: flex;
text-decoration: none;
align-items: center;

    &.active{
        border-bottom: ${p=>p.borderBottom || "3px solid #FC5185"};
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
    background: ${pink};
    color:${white};
    font-size:16px;
    font-weight: bold;
    outline:none;
    border:none;
    border-radius: 50px;
    padding: 10px 22px;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    cursor:pointer;
        
        &:hover{
            transition: all 0.2s ease-in-out;
            background: ${white};
            color:${pink};
        }
    `

