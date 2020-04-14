import * as React from 'react';
import { useState } from "react";

import PokeballIcon from "./PokeballIcon";
import MainNav from "./MainNav";

interface NaviagationProps {
    generation: string
}
 
const Naviagation: React.SFC<NaviagationProps> = ({generation}) => {
    const [navActive, setNavActive] = useState<boolean>(false);
    return ( 
        <>
        <PokeballIcon navActive={navActive} setNavActive={setNavActive} />
        <MainNav active={navActive} generation={generation} />
        </>
     );
}
 
export default Naviagation;