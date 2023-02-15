import React from 'react'
import "./SingleProduct.css"
import {Link} from "react-router-dom"

const SingleProduct = () => {
  return (
    <>
    <div className="single-product-container">
		<div className="product-image">
			<img src="https://www.kicksonfire.com/wp-content/uploads/2018/06/air-jordan-1-mid-orange-peel-2.jpg" alt="Product Name"/>
		</div>
		<div className="product-details">
			<h2>Product Name</h2>
			<p className="price">$99.99</p>
			<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum orci felis, a cursus risus sagittis ac. Aenean quis tellus a elit porttitor facilisis.</p>
			<form>
				<label for="size">Size:</label>
				<select id="size" name="size">
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
				<Link to={"/cart"}><button type="submit">Add to Cart</button></Link>
			</form>
		</div>
	</div>
    </>
  )
}

export default SingleProduct