//PopularSection
import img1 from "../assets/image/c1.jpg"
import img2 from "../assets/image/c2.jpg"
import img8 from "../assets/image/c3.jpg"
import img3 from "../assets/image/c4.jpg"
import img5 from "../assets/image/c1.jpg"
import img6 from "../assets/image/c2.jpg"
import img7 from "../assets/image/c3.jpg"
import img4 from "../assets/image/c4.jpg"


function PopularSection() {
  return (
    <div className="popular">
      <h1 className="popular__tittle"> Most popular</h1>
      <p className="popular__subtittle"> Pic the Best Fit</p>

      <div className="popular__container">

        <div className="course-card">
          <img src={img1} alt="1"></img>
          <h3>2024 python data visaulisation materclass</h3>
          <p>col steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={img3}alt="2"></img>
          <h3>Web Development BootCamp 2024 | Advance</h3>
          <p>col steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>1999</del></p>

        </div>

        <div className="course-card">
          <img src={img2}alt="3"></img>
          <h3>Master UI/UX Designing With Figma</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={img4}alt="4"></img>
          <h3>Basic to Advance Java Core Training</h3>
          <p>col steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={img5}alt="5"></img>
          <h3>Web Development BootCamp 2024 | Advance</h3>
          <p>col steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>1999</del></p>

        </div>
        <div className="course-card">
          <img src={img7}alt="6"></img>
          <h3>Web Development BootCamp 2024 | Advance</h3>
          <p>col steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>1999</del></p>

        </div>

        <div className="course-card">
          <img src={img6}alt="7"></img>
          <h3>2024 python data visaulisation materclass</h3>
          <p>col steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={img8} alt="8"></img>
          <h3>Web Development BootCamp 2024 | Advance</h3>
          <p>col steele</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>499 <del>1999</del></p>

        </div>

      </div>

    </div>
  )
}

export default PopularSection