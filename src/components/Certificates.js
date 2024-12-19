import React from "react";
import "animate.css";
import "slick-carousel/slick/slick.css"; // Slick Carousel styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme styles
import Slider from "react-slick";
import left from '../assets/img/arrow1.svg';
import right from '../assets/img/arrow2.svg';

const certificates = [
  {
    title: "Microsoft Business Analyst",
    issuer: "Coursera provided by Microsoft",
    date: "Issued October 2024",
    description: "Demonstrated expertise in business analysis, requirements gathering, process modeling with Microsoft Visio, and stakeholder management.",
  },
  {
    title: "Google Data Analytics",
    issuer: "Coursera provided by Google",
    date: "Issued September 2024",
    description: "Highlighted proficiency in data analysis tools like SQL, Tableau, R, and spreadsheets, with skills in data preparation, analysis, and visualization.",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "Issued March 2024",
    description: "Showcasing foundational knowledge of Azure services, cloud concepts, and security best practices.",
  },
  {
    title: "Google UX Design",
    issuer: "Coursera provided by Google",
    date: "Issued February 2024",
    description: "Demonstrated proficiency in the end-to-end UX design process, including user research, wireframing, prototyping, and usability testing.",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "Issued May 2023",
    description: "Acquired foundational knowledge and hands-on experience in building machine learning models.",
  },
  {
    title: "Google IT Automation with Python",
    issuer: "Coursera provided by Google",
    date: "Issued September 2020",
    description: "Gained expertise in Python scripting, Git, and IT automation for scalable IT solutions.",
  },
  {
    title: "Programming in C++",
    issuer: "NPTEL",
    date: "Issued March 2019",
    description: "Covered procedural extensions, object-oriented programming, inheritance, polymorphism, exception handling, and the use of templates and STL for effective systems and application development.",
  },
];

export const Certificates = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: (i) => (
      <div className="custom-dot">
        {i + 1} {/* Display numbers starting from 1 */}
      </div>
    ),
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className="custom-dots">
          {dots}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              <div className="flip-card-back">
                <h3>{cert.title}</h3>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <p><strong>Date:</strong> {cert.date}</p>
                <p>{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
