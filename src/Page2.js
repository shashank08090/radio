import React from 'react';
import './Page2.css';


function Page2(props) {
    return (
        <div id="Page2">
            <div id="img1"><img src={props.src1} alt="radio_quotes" id="imgleft" /></div>
            <div id="img2"><img src={props.src2} alt="radio_quotes" id="imgright"/></div>
        </div>
    )
}

export default Page2
