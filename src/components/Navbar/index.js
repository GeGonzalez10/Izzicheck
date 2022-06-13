import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarComponents'

export const Navbar = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='Home' spy={true} smooth={true} duration={500}>
                    Genesis Gonzalez
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem><NavLinks to="Home" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}>Home</NavLinks>
                    </NavItem>
                    <NavItem><NavLinks to="About"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={20}>Sobre mí</NavLinks>
                    </NavItem>
                    {/* <NavItem><NavLinks to="Experience">Experiencia</NavLinks></NavItem> */}
                    <NavItem><NavLinks to="Proyects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-100}>Proyectos</NavLinks>
                    </NavItem>                 
                </NavMenu>
                <NavBtn> <NavBtnLink to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={20}>Contacto</NavBtnLink>
                </NavBtn>
                {/* Estaría cool un botón para cambiar a modo oscuro */}
            </NavbarContainer>
        </Nav>
    </>
    );
};
export default Navbar;