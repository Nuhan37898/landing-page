import React from 'react';
import './Slider.css'; // CSS for custom styling

const Slider = ({ id, images, title }) => {
  return (
    <div className="slider-container">
      {/* Slider Title */}
      <h3 className="slider-title">{title}</h3>
      
      {/* Bootstrap Carousel */}
      <div id={id} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((imgSrc, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={imgSrc} className="d-block w-100" alt={title} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
