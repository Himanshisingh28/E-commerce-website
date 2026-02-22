import React from 'react'
import './DiscriptionBox.css'

const DisciptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates 
          buying and selling of products or services over the internet. 
          It serves as a virtual marketplace where businesses and individuals 
          can showcase their products, interact with customers, and conduct 
          transactions without the need for a physical presence. </p>
          <p> Customers can browse products, 
              compare prices, read reviews, and make secure payments from the 
              comfort of their homes. These platforms also provide features like 
              order tracking, customer support, personalized recommendations, 
              discount offers, and multiple payment options to enhance the 
              shopping experience and improve overall customer satisfaction.</p>
      </div>
    </div>
  )
}

export default DisciptionBox
