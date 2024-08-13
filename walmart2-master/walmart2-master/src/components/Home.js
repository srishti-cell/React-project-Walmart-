import React from 'react';
import backgroundImage from './image.png';
import { useNavigate } from 'react-router-dom';

const BackgroundImageComponent = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gift'); 
  };
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '17%',
    left: '96%',
    transform: 'translate(-50%, -50%)',
    padding: '10px 20px',
    fontSize: '17px',
    backgroundColor: '#007BFF',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={backgroundStyle}>
      <button style={buttonStyle} onClick={handleClick}>Gift</button>
    </div>
  );
};

export default BackgroundImageComponent;