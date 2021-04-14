
import React , {useState}from 'react';

import './Page3.css';
function Page3() {
const [x,y]=useState("");
const [x2,y2]=useState("");
const [x3,y3]=useState("");
  const fetchz = ()=>{
    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('https://fr1.api.radio-browser.info/json/stations')
      .then(function (response) {
        // handle success
        console.log(response);
        y(response.data[0].name);
        y2(response.data[1].name);
        y3(response.data[2].name);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  return (
    <div id="Page3">
        <div id="list">
      <button onClick={fetchz} id="but">fetch Radio Stations</button>
      </div>
      <div id="showlist">
      <h1>Results</h1>
      <div id="screen">
      
      
       
      <ul>
          <li><h2 id="l1">{x}</h2></li>
          <li> <h2 id="l2">{x2}</h2> </li>
          <li><h2 id="l3">{x3}</h2> </li>
      </ul>
      </div>
    </div> </div>
  )
}

export default Page3
