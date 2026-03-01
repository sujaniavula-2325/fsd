// function Navbar() {
//   return (
//     <>
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXFy0EF8grbbf5-AI9GaB7KXkDzvOTY13lw&s"></img>
//     </nav>
//     </>
//   );
// }

// export default Navbar;
// import { useState } from "react";
// function Navbar() {
//     const[isLoggedIn,setIsLoggedIn]=useState(false);
//     return(
//         <nav>
//             {isLoggedIn ? (
//            <>
//           <a href="#">Home</a> |{" "}
//           <a href="#">Profile</a> |{" "}
//           <button onClick={() => setIsLoggedIn(false)}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>
//           Login
//         </button>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
// function Navbar({ students }) {
//   return (
//     <div>
//       <h2>Student List</h2>

//       {students.map((student, index) => (
//         <p key={index}>
//           Name: {student.name}, 
//           Age: {student.age}, 
//           Course: {student.course}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default Navbar;
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
