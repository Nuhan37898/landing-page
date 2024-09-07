import React from 'react';
import './About.css'; // Custom CSS for About Us page

const reviews = [
  {
    name: "Jane Doe",
    review: "Our trip was absolutely amazing! The itinerary was perfectly tailored to our interests, and the guide was incredibly knowledgeable. We couldn't have asked for a better experience!"
  },
  {
    name: "John Smith",
    review: "The service we received was top-notch from start to finish. The customer support team was responsive and helpful, and the travel package exceeded our expectations. Highly recommend!"
  },
  {
    name: "Emily Johnson",
    review: "We had a fantastic time exploring new destinations with this agency. The personalized attention and attention to detail made our vacation stress-free and enjoyable. Will definitely book again!"
  }
];

const About = () => {
  return (
    <div className="container about-us">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-12">
          <p className="lead">
            Welcome to <strong>Trip With Nuhan</strong>!
          </p>
          <p>
            At <strong>Trip With Nuhan</strong>, we are passionate about creating unforgettable travel experiences. Founded with a vision to connect people with the world’s most incredible destinations, our agency offers a wide range of personalized travel services tailored to your needs.
          </p>
          <p>
            Our team of expert travel planners is dedicated to curating unique and memorable journeys for solo travelers, families, and groups. From custom travel packages and guided tours to luxury escapes and adventure travel, we ensure every detail is taken care of so you can focus on enjoying your trip.
          </p>
          <p>
            We pride ourselves on our extensive knowledge and local connections, allowing us to offer exclusive access and insider experiences at some of the most sought-after destinations. Whether you’re looking to explore historic cities, relax on pristine beaches, or embark on thrilling adventures, we have the expertise and resources to make your dream vacation a reality.
          </p>
          <p>
            At <strong>Trip With Nuhan</strong>, customer satisfaction is our top priority. We are committed to providing exceptional service and support from the moment you reach out to us until you return home. Our dedicated team is here to assist you every step of the way, ensuring a seamless and enjoyable travel experience.
          </p>
          <p>
            Join us on a journey of discovery and let us help you create memories that will last a lifetime. Contact us today to start planning your next adventure!
          </p>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section mt-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row">
          {reviews.map((review, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 review-card">
                <div className="card-body">
                  <h5 className="card-title">{review.name}</h5>
                  <p className="card-text">"{review.review}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
