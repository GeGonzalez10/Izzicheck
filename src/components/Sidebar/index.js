import React from 'react'
import { Button } from './../ButtonElements';
import {SidebarContainer, SidebarIcon, CloseIcon, SidebarWrapper, 
        SidebarMenu, SidebarLink, SidebarBtn} from './SidebarComponents'
import {SidebarData} from './SidebarData'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarIcon onClick={toggle}>
                <CloseIcon/>
            </SidebarIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    {SidebarData.map((item, index) =>{
                        return (
                            <SidebarLink to={item.path} onClick={toggle} spy={true} smooth={true} duration={600}>{item.title}</SidebarLink>
                        );
                    })}
                </SidebarMenu>
                <SidebarBtn>
                    <Button primary to="Contact" spy={true} smooth={true} duration={500}> Contacto</Button>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
        </>
    );
};

export default Sidebar;