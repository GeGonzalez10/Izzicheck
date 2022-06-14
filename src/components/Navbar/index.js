import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Img, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarComponents'
import Image from '../../images/izzicheckLogo.svg'

export const Navbar = ({toggle}) => {
const Sections = [ 
    {
        title:'Nosotros',
        link: "Home",
        offset : 300
    },
    {
        title:'Ventajas',
        link: "About",
        offset : 20
    },
    {
        title:'Planes',
        link: "Proyects",
        offset : 500
    },
    {
        title:'Cómo funciona',
        link: "Proyects",
    },
    {
        title:'A quiénes servimos',
        link: "Proyects",
    },
    {
        title:'Preguntas Frecuentes',
        link: "Proyects",
    },
    {
        title:'Contáctanos',
        link: "Contact",
        offset : 200
    },
    ]
    

    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='Home' spy={true} smooth={true} duration={500}>
                    <Img src={Image} alt='Logo'/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                {Sections.map(item=>{
                    return (
                    <NavItem><NavLinks to={item.link} 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={item.offset}>{item.title}</NavLinks>
                    </NavItem>
                   )
                })}
                    {/* <NavItem><NavLinks to="About"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={20}>Sobre mí</NavLinks>
                    </NavItem>
                    <NavItem><NavLinks to="Proyects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-100}>Proyectos</NavLinks>
                    </NavItem>                  */}
                </NavMenu>
                <NavBtn> <NavBtnLink to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={20}>Obtener ahora</NavBtnLink>
                </NavBtn>
                {/* Estaría cool un botón para cambiar a modo oscuro */}
            </NavbarContainer>
        </Nav>
    </>
    );
};
export default Navbar;