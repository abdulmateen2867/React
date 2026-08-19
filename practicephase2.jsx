import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// Phase 2: Components and Props

// 1)Function Components
// A component is just a function that returns JSX.
// Naming convention: PascalCase.  ie Header not header
// Composing components (components inside components). example shows like component inside component like app in which header footer and p and many other
function Header(){
  return <h1>HI, My name is Abdul Mateen</h1>
}
function Footer(){
  return <p>@ 2026 all rights reserved to abdulmateen</p>
}
function Body(){
  return(
  <>
  <Header />
  <p>Love you all</p>
  <Footer/>
  </>);
}
function App(){
  return <Body/>
}
export default App
// A quick note: class components used to be the only way to do this. React doesn't recommend them anymore, but you will still bump into them in older codebases, so it's worth knowing the name even without learning the syntax.
class Header1 extends React.Component {
  render() {
    return <h1>My Portfolio</h1>;
  }
}

// 2)Props      : like best way to pass value like in function we put value in bracket() this all is done by props
// Passing data into a component via props.
function Greetings(props){
  return(
    <h2>Hi, My name is {props.name}!. Hoping that I am now {props.age}</h2>
  );
}
function App(){
  return(
    <>
        <Greetings name="Abdul" age={22}/>
        <Greetings name="Ali" age={21}/>
    </>
  );
}
export default App
// Destructuring props (ties directly into object destructuring from the JS doc).
function Goodboys({name,age=18}){       // here 2 major concepts one is destructuring like js while other is defualt props like in function value only used when no value is given in app
  return <h2>Hi boy name is {name} and age is {age}</h2>
}
function App(){
  return(
    <>
    <Goodboys  name="Abdul" age={23}/>
    </>
  );
}
export default App
// Default prop values.
// children prop (passing JSX between opening and closing tags).
function Card({children}){
  return <div style={{backgroundColor:'pink', border:"1px solid black", padding:"10px"}}>{children}</div>
}
function App(){
  return(
    <Card>
      <h2>Hi how are you</h2>
      <p>Please pray for me also</p>
    </Card>
  );
}
export default App
// Props are read only. A component should not modify its own props.
function Greeting({name}){
  name="Changed"; // wrong 
  return <h2>{name}</h2>;
}

// 3)Rendering Lists
// Using map to turn an array into JSX elements. This is why array methods from the JS doc matter so much here.
function SkillCard({skill}){
  return <li>{skill}</li>
}
function App(){
  let skills=["Html","css","js","react"];
  return(
    <ul>
    {
      skills.map((skill,index)=>(
          <SkillCard key={index} skill={skill}></SkillCard>
      ))
    }
    </ul>
  );
}
export default App
// The key prop: what it's for, why React needs it, and why index as key can cause bugs.
// as main focus is that use index for a static list which mainlynever change while for chnaging and reordered list use effectively use id as an attribute
const users = [{ id: 101, name: "Ali" }, { id: 102, name: "Sara" }];
users.map((user, index) => <li key={index}>{user.name}</li>);   // risky

users.map((user) => <li key={user.id}>{user.name}</li>);  // better 
// 4)Conditional rendering: 
// the && operator: render something when the whole condition is true
function Checkvalue({hasvalue}){
  return(
    <h3>{hasvalue&&<p>Good to see you</p>}</h3>
  );
}
function App(){
  return <Checkvalue hasvalue={true}/>
}
export default App
    // as most important thing is that as it acts as and operator ie if we put 0 instead of any thing it takes it as false but can print it 0 so better is to use ternary in this case
// ternary operator
function App(){
  let isloggedin = 0
  return(
    <h2>{isloggedin?"Welcomeback":"Please log in again"}</h2>
  );
}
export default App
//  early returns.
function App(){
  let user = {name:"Abdul",email:"a34101"}
  if(!user){
    return <p>Loading user</p>
  }
  return(
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
export default App
