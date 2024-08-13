import React, { useState } from 'react';
import './Gift.css';
import { useNavigate } from 'react-router-dom';
import { FaSmile } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';
import Slider from 'react-slider';

const GiftSection = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [customColor, setCustomColor] = useState('');
  const [priceRange, setPriceRange] = useState([500, 2500]);
  const [event, setEvent] = useState('');
  const [quantity, setQuantity] = useState(2);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (gender === 'male') {
        navigate('/giftcard');
      } else if (gender === 'female') {
        navigate('/giftcard/female');
      } else {
        navigate('/giftcard');
      }
    }, 6000); // 6 seconds
  };

  const colors = ['#FF0000', '#0000FF', '#008000', '#FFFF00', '#FFA500', '#800080', '#000000', '#FFC0CB', '#ADD8E6'];


  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((clr) => clr !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="gift-section">
      <div className="header">
        <h1 style={{ color: 'yellow' }}>Welcome to Walmart Gift Section</h1>
        <p style={{ color: 'white' }}>Choose your preferences, and our system will create customized gift baskets for you.</p>
      </div>
      <div className="filter-form">
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="large-select">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="event">Event:</label>
          <select id="event" value={event} onChange={(e) => setEvent(e.target.value)} className="large-select">
            <option value="">Select</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div className="form-group">
          <label>Color:</label>
          <div className="color-options">
            {colors.map((clr, index) => (
              <div
                key={index}
                className={`color-circle ${selectedColors.includes(clr) ? 'selected' : ''}`}
                style={{ backgroundColor: clr }}
                onClick={() => toggleColor(clr)}
              ></div>
            ))}
            <textarea
              
              placeholder="Type custom color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              className="custom-color-textarea"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="priceRange">Price Range: {priceRange[0]} - {priceRange[1]} Rs</label>
            <Slider
              className="slider"
              min={500}
              max={5000}
              step={100}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              trackClassName="slider-track"
              thumbClassName="slider-thumb"
              renderThumb={(props) => <div {...props} />}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity in Gift Basket upto: {quantity}</label>
            <Slider
              className="slider"
              min={1}
              max={15}
              step={1}
              value={quantity}
              onChange={(value) => setQuantity(value)}
              trackClassName="slider-track"
              thumbClassName="slider-thumb"
              renderThumb={(props) => <div {...props} />}
            />
          </div>
        </div>
        <button className="submit-btn" onClick={handleClick}>Generate Gift Baskets</button>
      </div>
      {loading && (
        <div className="loading-modal">
          <div className="loading-content">
            <FaSpinner style={{color:"black"}} className="spinner" />
            <p>Just a moment, our smart assistant is curating your perfect baskets!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftSection;
