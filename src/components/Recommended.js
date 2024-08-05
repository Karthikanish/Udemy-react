//Recommended

import two from "../assets/image/c1.jpg"
import three from "../assets/image/c2.jpg"
import four from "../assets/image/c3.jpg"
import five from "../assets/image/c4.jpg"


function Recommended() {
    return (
  
      <div className="recommended">
        <h1 className="recommended__tittle">recommended for you</h1>
        <p>pick the Best fit</p>
        <div class="recommended__container">
          <div className="course-card">
            <img src={two}alt="1"></img>
            <h3>2024 python data visaulisation materclass</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>499 <del>1999</del></p>
          </div>
  
          <div className="course-card">
            <img src={three}alt="2"></img>
            <h3>Web Development BootCamp 2024 | Advance</h3>
            <p>col steele</p>
            <p>3.9 ⭐⭐⭐</p>
            <p>499 <del>1999</del></p>
  
          </div>
  
          <div className="course-card">
            <img src={four}alt="3"></img>
            <h3>Master UI/UX Designing With Figma</h3>
            <p>col steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>499 <del>1999</del></p>
          </div>
  
          <div className="course-card">
            <img src={five}alt="4"></img>
            <h3>Basic to Advance Java Core Training</h3>
            <p>col steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>499 <del>1999</del></p>
          </div>
        </div>
      </div>
    )
  }

  export default Recommended