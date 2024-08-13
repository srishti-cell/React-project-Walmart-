import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Shipping.css';
import headerImg from './header.png';
import productImg from './img3.jpg'; // Replace with your product image

const ShippingForm = () => {
  const [shippingDate, setShippingDate] = useState(null);
  const [message, setMessage] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);
  const discountedPrice = 3000 * 0.6; // Calculate the discounted price

  const handleDateChange = (date) => setShippingDate(date);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleGiftWrapChange = (e) => setGiftWrap(e.target.checked);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ shippingDate, message, giftWrap });
  };

  return (
    <div>
      <div className="header-container">
        <img src={headerImg} alt="Header" className="header-image" />
      </div>
      <div className="flex-container">
        <div className="left-container">
          <img src={productImg} alt="Product" className="product-image" />
          <label style={{color:'black'}}>Price: ₹3000</label>
          <label style={{color:'black'}}>Discount: 40%</label>
          <hr className="discount-line" />
          <label style={{color:'black'}}>Discounted Price: ₹{discountedPrice.toFixed(2)}</label>
        </div>
        <div className="right-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label style={{color:"black"}}>Shipping Date:11 August 2024</label>
            </div>
            <div className="form-group">
              <label style={{marginBottom:'0px',color:"black"}}>Want to delivery on the event date? Select event date:</label>
              <DatePicker selected={shippingDate} onChange={handleDateChange} />
            </div>
            <div className="form-group">
              <label style={{marginBottom:'0px',color:"black"}}>Any Customised Message for the recepient? Type here</label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter a message"
              ></textarea>
            </div>
            <div className="form-group">
              <label style={{color:"black"}}>
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={handleGiftWrapChange}
                />
                Want gift basket to be wrap in gift cover?
              </label>
            </div>
            <button type="submit">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
