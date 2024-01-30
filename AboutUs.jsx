import React from 'react';
import '../../styles/AboutUs.css';


function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Mind Connect</h1>

      <img 
        src="path-to-your-image.jpg" 
        alt="Mental Health Image" 
        className="about-us-image"
      />

      <p className="about-us-text">
        Mind Connect is a dedicated mental health app that aims to support and empower
        individuals on their journey towards mental wellness. We offer tools, resources,
        and a community to help our users achieve a balanced and fulfilling life.
      </p>

      <div className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a safe, inclusive, and accessible platform for everyone.
          We believe in the importance of mental health and strive to create an environment
          where our users can find support, guidance, and inspiration.
        </p>
      </div>

      <div className="about-us-section">
        <h2>Our Team</h2>
        <p>
          The Mind Connect team consists of mental health professionals, technology experts,
          and compassionate individuals dedicated to making a difference. We are constantly
          working to improve our app and provide the best possible experience for our users.
        </p>
      </div>

      <div className="about-us-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you. Contact us at
          <a href="mailto:contact@mindconnect.com"> contact@mindconnect.com</a>.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
