import React from "react";
import "../styles/Clinic.css";

// Import clinic images from your local folder
import client1 from "../Images/client1.png";
import client2 from "../Images/client2.png";
import client3 from "../Images/client3.png";
import client4 from "../Images/client4.png";
import client5 from "../Images/client5.png";
import client6 from "../Images/client6.png";
const clinics = [
  {
    name: "Sunshine Health Clinic",
    location: "Connaught Place, Delhi",
    timing: "Mon-Sat, 9 AM - 7 PM",
    rating: 4.9,
    reviews: 256,
    image: client1,
  },
  {
    name: "Little Hearts Clinic",
    location: "Bandra West, Mumbai",
    timing: "Mon-Sun, 10 AM - 8 PM",
    rating: 4.5,
    reviews: 189,
    image: client2,
  },
  {
    name: "Heal Well Clinic",
    location: "Indiranagar, Bangalore",
    timing: "Mon-Sat, 8 AM - 5 PM",
    rating: 4.8,
    reviews: 256,
    image: client3,
  },
  {
    name: "Women’s Wellness Clinic",
    location: "Koregaon Park, Pune",
    timing: "Mon-Sun, 8 AM - 4 PM",
    rating: 4.7,
    reviews: 198,
    image: client4,
  },
  {
    name: "HeartCare Clinic",
    location: "T. Nagar, Chennai",
    timing: "Mon-Sat, 9 AM - 3 PM",
    rating: 4.9,
    reviews: 405,
    image: client5,
  },
  {
    name: "Radiance Skin Clinic",
    location: "Jubilee Hills, Hyderabad",
    timing: "Tue-Sun, 10 AM - 6 PM",
    rating: 4.6,
    reviews: 230,
    image: client6,
  },
];

const Clinic = () => {
  return (
    <div className="clinic-container">
      <div className="clinic-list">
        {clinics.map((clinic, index) => (
          <div key={index} className="clinic-card">
            <img src={clinic.image} alt={clinic.name} />
            <div className="clinic-info">
              <div className="clinic-name">{clinic.name}</div>
              <div className="clinic-location">{clinic.location}</div>
              <div className="clinic-timing">{clinic.timing}</div>
              <div className="clinic-rating">
                ⭐ {clinic.rating} <span className="reviews">({clinic.reviews} reviews)</span>
              </div>
              <a href="www.google.com" className="more-link">More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clinic;
