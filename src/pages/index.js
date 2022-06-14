import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { HomeSection } from '../components/HomeSection';
import { Section2 } from '../components/Section2';
import { AboutDataObj } from '../components/Section2/AboutData';
import Proyects from '../components/Proyects';
import { RRSS } from '../components/RRSS';
import { RRSSDataObj } from '../components/RRSS/RRSSData';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HomeSection/>
        <Section2 {...AboutDataObj}/>
        <Proyects/>
        <RRSS {...RRSSDataObj}/>
        </>
    );
};

export default Home;