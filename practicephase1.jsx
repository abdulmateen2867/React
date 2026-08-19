import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// .jsx tell js thatit contain jsx syntax
//{}   allow to put javascript inside JSX

//  Phase 1
//1) A Little Web Context First

// Quick refresher on how a browser turns HTML, CSS, and JS into a page (ties back to Phase 6 of the JS doc).
    // as already knows that browser read html and build a dom and css applly on it and lst js apply on it
// Multi page sites (full reload on every link): when click a link browser request for whole page as a new html file like for a page fully reload vs SPA (Single Page Apps): one html file loads once where JS takes over navigation and swaps content without a reload also swaps out pieces of pages ie react often works on it
// What a bundler does at a high level: takes your JSX and modules and turns them into plain JS the browser can run.Also convert your jsx file into real js file You don't need to understand bundlers deeply, just know they exist and why.
// also for purpose of run it we use "npm run dev"


//2)Why React

// Why we don't just use plain DOM manipulation at scale.
    // as may genrate cogenitive load or down performance and slow sytem and unpredicted UI 
// Declarative UI vs imperative UI: describing what the UI should look like vs manually changing it step by step.

  // Imperative UI: like manually chnging things step by step
  function createimperativebutton(){
    const button = document.createElement("button");
  
  let count=0;
  button.textContent="Count:0"
  button.addEventListener("click",()=>{
    count++;
    button.textContent=`Count: ${count}`
    console.log(`Count: ${count}`)
  });
  document.querySelector(".buttonselector").appendChild(button)
  }
  function App(){
  
  return(
    <div>
    <h1>Imperative UI Practice</h1>
    <button onClick={createimperativebutton}>Create button</button>
    <div className='buttonselector'></div>
    </div>
  );

}

export default App

    // As react is declarative 
  // Declarative UI:
// The idea of a component: a reusable piece of UI built from a function.
function Counterbutton(){     // in this counterbutton is a component that return an jsx
  let [count,setcount] = useState(0);
  return (
    <button onClick={()=>{setcount(count+1)}}>
      Count:{count}
    </button>
  );
}
function App(){
  return(
    <div>
    <h1>Hi</h1>
    <Counterbutton/>
    </div>
  );
}

export default App

// The idea of a component: a reusable piece of UI built from a function.
function Component(){     //  must every component should start with a capital letter in react
  return (
    <button>
      Hi Click me
    </button>
  );
}

function App(){
  return (
    <div>
    <h1> Let check component</h1>
    <Component/>
    </div>
  );
}
export default App

// 3)Setting Up a Project

// Using Vite to create a React app (the modern standard, replaces create-react-app).
// Project structure: src, public, main entry file, index.html.
// Running the dev server, hot reloading.
// JSX file extension (.jsx) and why it matters.


// 4) JSX Fundamentals

// JSX is JavaScript, not HTML (it compiles down to function calls).
     const h1 = <h1>Hi</h1>;

// below do same above thing by rough method
       const h1rough = React.createElement("h1",null,"Hello"); // no need to write create Element AJAX as better syntax for it  
// Embedding JavaScript expressions with curly braces.
function App(){
  const name="Ali"
  const age=24
  return(
    <div className='container'>
      <h1>My name is {name}</h1>
      <p>My age is {age}</p>
      <p>My next year age is {age+1}</p>
    </div>
  );
}
export default App
// JSX attributes: className instead of class, camelCase for style-related attributes.
<div className='box' style={{color:pink,fontSize:"20px"}}>
  Hi howare you 
</div>      // as 1 {} shows js while other shows the object itself and all property shows camel case
// Self closing tags.
<img src='main'/>
<br />
<input type='"text'/>
// One parent element per return (or use of Fragments, empty angle brackets).
        // as one return only return a single object like a <div></div> or a <> </>
//Rendering lists and why you can't just drop an array into JSX without map.
function App(){
  const fruits = ["Mango","Apple","Banana","Orange"];
  return(
    <ul>
      {fruits.map((fruit,index)=>(
        <li key={index}>{fruit}</li>  // as return requied as {} in arrow function means a separate function so need separate return or replace {} with () then automatically return occur
      ))}
    </ul>
  );
}
export default App
// Setting Up a Project

    // example no 1
function App(){
  return (
    <h1>Hello React</h1>
  )
}
export default App

  // example no 2 
function App() {
  const name = "Ali"
  const age = 22

  return (
    <div className='container'>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Next year you'll be {age + 1}.</p>
    </div>
  )
}

export default App
