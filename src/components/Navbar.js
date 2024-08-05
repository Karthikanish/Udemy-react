
//Navbar

function Navbar() {
    return (
      <nav className="one">
  
        <div className="navbar__s1">
          <h1 class=" navbar__s1__tittle"> Udemy </h1>
        </div>
        <div className="navbar__s2">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="search for anything hear. Tech,business, Art ..." ></input>
        </div>
  
        <div className="navbar__s3">
          Courses
          <div className="mylearning">
            <p>My Learning</p>
            <div className="mylearning__popup">
              <p>You did not purchase anything yet</p>
            </div>
          </div>
          <i className="fa-solid fa-cart-shopping" style={{color:"black"}}></i>
          <i className="fa-solid fa-bell" style={{color:"black"}}></i>
          <i className="fa-solid fa-user" style={{color:"black"}}></i>
        </div>
        <div className="navbar__s4">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
      
  
    )
  
  
  }

  export default Navbar