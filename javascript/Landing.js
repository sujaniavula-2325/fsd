// import "./Landing.css";
// function Landing() {
//   return (
//       <h1>Landing Page</h1>
//   );
// }

// export default Landing;
import "./Landing.css";
function Landing(name,age,course){
    return(
        <>
        <h3>Displaying The Landing Page</h3>
        <p>
            {name}
            {age}
            {course}
        </p>
        </>
    )
}
export default Landing;