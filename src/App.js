import React from "react";
import logo from './logo.svg';
import './App.css';
import FC from './Components/Func1';
import { ClassComp, ClassComp2 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
import Classprops from './Components/Classprops';

function App() {
  return (
    <div className="App">
          <h1>Hello test react</h1>
          <FC></FC>
          <ClassComp></ClassComp>
          <ClassComp2></ClassComp2>
          <Click></Click>
          <Counter />
          <ParentComp />
          <Classprops name="test1">
              <p>child comp</p>
          </Classprops>
          <Classprops name="test2">
              <button>click</button>
          </Classprops>
    </div>
  );
}

export default App;
