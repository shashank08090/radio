import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './Page1';
import Header from './Header';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';





ReactDOM.render(<>

<Header />
<Page1 />

<Page2  src1="radio2.jpg" src2="radio3.jpg"/>
<Page3 />
<Page4 />
<Page2 src1="colors.jpg" src2="Music.jpg" />
<Page5 />


</>,document.getElementById('root'))