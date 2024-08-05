//SaleImage

import one from "../assets/image/sale image.jpg"

function SaleImage() {
    return (
      <div className="saleimage">
        <img src={one} alt="sale-image"></img>
        <div className="sale-image__offer">
          <h1>Udemy Falsh Sale! 24 haurs to save</h1>
          <p>get the top courses of jest 499.just one day to save but a life time to learn</p>
  
        </div>
      </div>
    )
  }

  export default SaleImage
  