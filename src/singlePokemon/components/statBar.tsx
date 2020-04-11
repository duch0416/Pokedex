import * as React from 'react';
import styled from "styled-components"

import {Device} from "../../enums/Device"

const Wrapper = styled.div`
    width: 150px;
    height: 4px;
    background-color: #F4F5F4;
    border-radius: 50px;
    @media ${Device.TABLET}{
        width: 250px;
        height: 6px;
    }
`
const StatPercentage = styled.div<{percentage: number, red?: string}>`
    width: ${({percentage}) => `${percentage}%`};
    height: 4px;
    background-color: ${({red}) => red ? "#FB6C6C" : "#4BC07A"};
    border-radius: 50px;
    @media ${Device.TABLET}{
        height: 6px;
    }
`
export interface statBarProps {
    baseStat:number;
    red?: string;
}
 
const statBar: React.SFC<statBarProps> = ({baseStat, red}) => {
    const percentage = (baseStat / 200) * 100
    return ( 
        <Wrapper>
            <StatPercentage percentage={percentage} red={red}/>
        </Wrapper>
     );
}
 
export default statBar;