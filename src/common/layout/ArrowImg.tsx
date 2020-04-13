import * as React from 'react';

interface ArrowImgProps {
    color: string
}
 
const ArrowImg: React.SFC<ArrowImgProps> = ({color}) => {
    return ( 
        <svg width="24" height="24" fill={color} xmlns="http://www.w3.org/2000/svg"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
     );
}
 
export default ArrowImg;