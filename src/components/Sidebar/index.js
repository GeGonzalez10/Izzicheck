import React from 'react'

import {SidebarContainer, SidebarIcon, CloseIcon, SidebarWrapper, 
        SidebarMenu, SidebarLink, SidebarBtn, SidebarRoute} from './SidebarComponents'
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
                    <SidebarRoute to="Contact" spy={true} smooth={true} duration={500}> Contacto</SidebarRoute>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
        </>
    );
};

export default Sidebar;