import React from 'react'
import "./MenCard.css"
import {Link} from "react-router-dom"

const MenCard = () => {
  return (
    <>
    <div className="container">
  <div className="product-card">
    <div className="image">
      <Link to={"/singleproduct"}><img src="https://www.kicksonfire.com/wp-content/uploads/2018/06/air-jordan-1-mid-orange-peel-2.jpg" alt=""/></Link>
    </div>
    <div className="card-content">
      <h3>Air Jordan 1 Mid</h3>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div className="store-purchase">
        <div className="price">$149.99</div>
        <div className="buy">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default MenCard