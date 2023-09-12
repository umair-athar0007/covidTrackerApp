
import './App.css';
import React, { Suspense } from 'react';
import { useState } from 'react';
import { Home } from './components/home';
import { CovidCards } from './components/home';
import { Graph } from './components/mychart';
function App() {
  let [record, SetRecord] = useState({});
  let [Covidrecord, SetCovidrecord] = useState({});
  return (


    <div className="App">

      <Home></Home>
      <Suspense fallback={<div>loading...........</div>} >
      <div className="Flex">
        
        <CovidCards record={record} SetRecord={SetRecord} Covidrecord={Covidrecord} SetCovidrecord={SetCovidrecord}  />
      </div>
      </Suspense>

      <div className='grapph'>
        <Graph record={record} SetRecord={SetRecord} Covidrecord={Covidrecord} SetCovidrecord={SetCovidrecord}   />
      </div>

    </div>
  );
}

export default App;
