import React from 'react';
import 'animate.css';

export const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Information Systems',
      institution: 'Northeastern University',
      year: 'May 2024',
      details: [
        'Relevant Coursework: User Experience Design, Data Science and Machine Learning Systems Engineering, Business Intelligence and Data Analytics, Full-Stack Software Engineering',
        'Key Projects: Grocery Application Design, Hotel Database Management, Global Givers, Food Recipe Manager, Vaccination Schedular',
      ],
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'CHARUSAT University',
      year: 'May 2022',
      details: [
        'Relevant Coursework: Software Development & Programming, Data Science & Analytics, Cybersecurity & Networking, Cloud & DevOps, Emerging Technologies, Computer Science Fundamentals',
        'Projects: Text Recognition Application,  Fruit Inspector Application, PG Management App, Animated Video',
      ],
    },
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="year">{edu.year}</p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

