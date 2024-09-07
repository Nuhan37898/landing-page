import React from 'react';
import './Services.css'; // Custom CSS for the services page

const servicesData = [
  {
    title: "Custom Travel Packages",
    description: "Personalized travel itineraries tailored to your preferences, including destinations, accommodations, and activities. Perfect for solo travelers, families, and groups."
  },
  {
    title: "Guided Tours",
    description: "Expert-guided city tours, historical site visits, and nature excursions in multiple languages across popular destinations."
  },
  {
    title: "Adventure Travel",
    description: "Thrilling adventures such as hiking, mountain climbing, scuba diving, and safari tours with certified guides and equipment."
  },
  {
    title: "Luxury Travel",
    description: "Premium experiences including 5-star hotels, private transportation, and exclusive access to top attractions, resorts, and fine dining."
  },
  {
    title: "Cultural Immersion Experiences",
    description: "Engage with local cultures through authentic experiences such as traditional cooking classes, village tours, and festivals."
  },
  {
    title: "Honeymoon Packages",
    description: "Romantic getaways designed for newlyweds, including secluded beach resorts, spa treatments, and candlelit dinners."
  },
  {
    title: "Corporate Travel Services",
    description: "Organizing conferences, team-building retreats, and incentive trips for companies, with comprehensive services."
  },
  {
    title: "Flight and Hotel Bookings",
    description: "Assistance with booking flights, hotels, and other accommodations with access to exclusive deals and discounts."
  },
  {
    title: "Cruise Packages",
    description: "Ocean and river cruise arrangements with top cruise lines, including luxury, family-friendly, and expedition options."
  },
  {
    title: "Travel Insurance",
    description: "Comprehensive travel insurance for medical emergencies, cancellations, and lost luggage. Custom plans available."
  },
  {
    title: "Visa Assistance",
    description: "Support with visa applications, document preparation, and embassy appointments for tourists, students, and business travelers."
  },
  {
    title: "Destination Weddings",
    description: "Full-service planning for weddings abroad, including venue booking, legal arrangements, and coordination with local vendors."
  },
  {
    title: "Airport Transfers",
    description: "Private and group transfers to and from airports, hotels, and tourist attractions for domestic and international destinations."
  },
  {
    title: "Educational Tours",
    description: "Organizing tours for students and educational institutions to historical sites, museums, and nature reserves."
  },
  {
    title: "Eco-Friendly Travel Packages",
    description: "Sustainable travel options with eco-friendly accommodations, responsible wildlife tours, and carbon-neutral transportation."
  }
];

const Services = () => {
  return (
    <div className="container">
      {/* Headline */}
      <div className="services-header">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="row">
        {servicesData.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 service-card">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
