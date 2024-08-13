import React, { useState } from 'react';
import './Female.css';

// Sample image imports
import headerImg from './images/header.png'; // Import the header image
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';

const images = [
    { src: img1, price: 'Rs. 2500' },
    { src: img2, price: 'Rs. 2000' },
    { src: img3, price: 'Rs. 3000' },
    { src: img4, price: 'Rs. 2500' },
    { src: img5, price: 'Rs. 3000' },
    { src: img6, price: 'Rs. 3500' },
    { src: img7, price: 'Rs. 2000' },
    { src: img8, price: 'Rs. 4000' },
];

const ImageGallery = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = () => {
        window.location.href = "http://127.0.0.1:5501/index.html";
    };

    const handleDetailsClick = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            {/* Header Image */}
            <div className="header-container">
                <img src={headerImg} alt="Header" className="header-image" />
            </div>

            {/* Gallery Content */}
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div className="card" key={index}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <div className="card-footer">
                            <div className="price">{image.price}</div>
                            <button onClick={() => handleDetailsClick(image)}>Details</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2 >Details</h2>
                        <br/>
                        <p>Selected Item Price:{selectedImage.price}</p>
                        <br/>
                        <ul>
                            <li>1x Hershey's Kisses 400g</li>
                            <li>1x Axe deodarant 500ml</li>
                            <li>1x Champagne 1L</li>
                            <li>1x The Nut bakers 300g</li>
                            <li>1x Plant decor</li>
                        </ul>
                        <button onClick={handleClick} className="checkout-button">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
