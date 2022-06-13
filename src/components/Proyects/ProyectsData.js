import {FaReact, FaCss3Alt, FaBootstrap, FaSass} from 'react-icons/fa'
import {DiMaterializecss} from 'react-icons/di'
import {SiStyledcomponents} from 'react-icons/si'

import TiendaOnline from '../../images/Home-tiendaonline.png'
import Nya from '../../images/NyAssistance.jpg'
import Hotel from '../../images/Hotels2.jpg'

    export const proyects = [
    {
    title:'Tienda Online',
    link: 'https://github.com/GeGonzalez10/TiendaOnline',
    img: TiendaOnline,
    _id:'TiendaOnline',
    pText: 'Frontend para página web usando ReactJs: proyecto de práctica usando Styled Componets, MaterialUi',
    icon: <FaReact/>, 
    icon_2:<SiStyledcomponents/>,
    href: "https://github.com/GeGonzalez10/TiendaOnline"
    }, 
    {
    title:'Landing Page - New York Assistance',
    link: 'https://github.com/GeGonzalez10/TiendaOnline',
    img: Nya,
    _id:'NewYorkAssistance',
    pText: 'Frontend de Página Web para NY Assistance. Diseño responsive, animaciones en CSS',
    icon: <FaCss3Alt/>,
    icon_2: <DiMaterializecss/>,
    href: "https://github.com/GeGonzalez10/NyAssistance"
    }, 
    {
    title:'Guia de Hoteles',
    img: Hotel,
    link:'https://github.com/GeGonzalez10/Guia-de-Hoteles',
    _id:'GuiaDeHoteles',
    pText: 'Diseño de Página Web con Bootstrap. Diseño responsive, uso de SASS, Grunt',
    icon: <FaBootstrap/>,
    icon_2: <FaSass/>,
    href: "https://github.com/GeGonzalez10/Guia-de-Hoteles"
    }, 
    
];
