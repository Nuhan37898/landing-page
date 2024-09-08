import React from 'react';
import Card from '../components/Card';
import Slider from '../components/Slider';
import './Home.css'; // Import the CSS file

const Home = () => {
  // Data for the cards
  const cardsData = [
    {
      title: 'Adventure Getaways',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat exercitationem laboriosam nostrum, cupiditate eum reprehenderit ab cum maxime aliquam in itaque nobis quod quae debitis iste vitae veniam vel necessitatibus.',
      imgSrc: 'https://picsum.photos/300/200', // Updated image source
      buttonLink: '#',
    },
    {
      title: 'Cultural Journeys',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat exercitationem laboriosam nostrum, cupiditate eum reprehenderit ab cum maxime aliquam in itaque nobis quod quae debitis iste vitae veniam vel necessitatibus.',
      imgSrc: 'https://picsum.photos/300/200?random=2', // Updated image source
      buttonLink: '#',
    },
    {
      title: 'Luxury Escapes',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat exercitationem laboriosam nostrum, cupiditate eum reprehenderit ab cum maxime aliquam in itaque nobis quod quae debitis iste vitae veniam vel necessitatibus.',
      imgSrc: 'https://picsum.photos/300/200?random=3', // Updated image source
      buttonLink: '#',
    },
    {
      title: 'Family Vacations',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat exercitationem laboriosam nostrum, cupiditate eum reprehenderit ab cum maxime aliquam in itaque nobis quod quae debitis iste vitae veniam vel necessitatibus.',
      imgSrc: 'https://picsum.photos/300/200?random=4', // Updated image source
      buttonLink: '#',
    }
  ];

  // Data for the sliders
  const slidersData = [
    {
      id: 'carousel1',
      images: [
        'https://picsum.photos/400/300', // Updated image source
        'https://picsum.photos/400/300?random=2', // Updated image source
        'https://picsum.photos/400/300?random=3', // Updated image source
      ],
      title: 'Paris, France', // Title for the first slider
    },
    {
      id: 'carousel2',
      images: [
        'https://picsum.photos/400/300?random=4', // Updated image source
        'https://picsum.photos/400/300?random=5', // Updated image source
        'https://picsum.photos/400/300?random=6', // Updated image source
      ],
      title: 'New York, USA', // Title for the second slider
    },
    {
      id: 'carousel3',
      images: [
        'https://picsum.photos/400/300?random=7', // Updated image source
        'https://picsum.photos/400/300?random=8', // Updated image source
        'https://picsum.photos/400/300?random=9', // Updated image source
      ],
      title: 'Tokyo, Japan', // Title for the third slider
    },
  ];

  return (
    <div className="container">
      {/* Cards Section */}
      <div className="row">
        {cardsData.map((card, index) => (
          <div className="col-md-3" key={index}>
            <Card 
              title={card.title} 
              text={card.text} 
              imgSrc={card.imgSrc} 
              buttonLink={card.buttonLink} 
            />
          </div>
        ))}
      </div>

      {/* Image Sliders Section */}
      <div className="row mt-4">
        {slidersData.map((slider, index) => (
          <div className="col-md-4" key={index}>
            <Slider id={slider.id} images={slider.images} title={slider.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
