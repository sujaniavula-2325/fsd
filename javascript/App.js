// import logo from './logo.svg';
// import './App.css';
// import Landing from './Landing/Landing';
// import Navbar from './Navbar/Navbar';
// function App() {
//   return (
//     <div className="App">
//       <Landing/>
//       <Navbar/>
//       <home/>
//       <about/>
//       <contact/>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Landing from './Landing/Landing';

// let student = {
//   name: "Sujani",
//   age: 20,
//   course: "BTECH"
// };

// function App() {
//   return (
//     <>
//       <Landing 
//         name={student.name} 
//         age={student.age} 
//         course={student.course} 
//       />
//     </>
//   );
// }

// export default App;
// import './App.css';
// import Login from './Login';

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }
// export default App;


// function Login() {
//   function add() {
//     const a = document.getElementById("num1").value;
//     const b = document.getElementById("num2").value;
//     const sum = Number(a) + Number(b);
//     document.getElementById("result").innerText = sum;
//   }

//   return (
//     <div>
//       <h1>Hello example for using JSX expressions</h1>
//       <input type="number" id="num1" />
//       <input type="number" id="num2" />
//       <button onClick={add}>Add</button>
//       <h2 id="result"></h2>
//     </div>
//   );
// }

// export default Login;
// import "./App.css";
// import Navbar from "./Navbar/Navbar";
// function App(){
//   return (
//     <>
//     <Navbar/>
//     </>
//   )
// }
// export default App;
// import './App.css';
// import Navbar from './Navbar/Navbar';

// let student = [
//   { name: "Naidu", age: 24, course: "MERN" },
//   { name: "Kiran", age: 25, course: "MERN" },
//   { name: "Balu", age: 23, course: "MERN" }
// ];

// function App() {
//   return (
//     <>
//       <Navbar students={student} />
//     </>
//   );
// }

// export default App;
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;

