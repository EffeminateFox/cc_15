//U54529624
// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the combined CSS file for styling
import './cc15.css';

// Define the PersonalInfo component
const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h1>Lucas Scott</h1> {/* Display name */}
      <p>Biography: I am a 20-year-old college student at the University of South Florida (USF), majoring in Marketing and Data Analysis. I am passionate about leveraging data to drive marketing strategies and decisions.</p> {/* Display biography */}
      <p>Email: lucasjohnscott@usf.edu</p> {/* Display email */}
      <p>LinkedIn: <a href="https://www.linkedin.com/in/lucasjohnscott/">LinkedIn Profile</a></p> {/* Display LinkedIn profile link */}
    </div>
  );
};

// Define the Skill component that takes props for skill name and proficiency level
const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <h4>{name}</h4> {/* Display skill name */}
      <p>Proficiency: {level}</p> {/* Display proficiency level */}
    </div>
  );
};

// Define the Skills component
const Skills = () => {
  // List of skills with their proficiency levels
  const skills = [
    { name: 'Marketing', level: 'Intermediete' },
    { name: 'Data Analysis', level: 'Novice' },
    { name: 'SQL, Google Analytics', level: 'Novice' },
    { name: 'Office, Adobe, Drive', level: 'Advanced ' },
  ];

  return (
    <div className="skills">
      <h2>Skills</h2> {/* Section title */}
      {skills.map((skill, index) => (
        // Render Skill component for each skill in the list
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

// Define the Education component
const Education = () => {
  // List of educational background with their details
  const education = [
    { institution: 'University of South Florida', degree: 'BS in Marketing and Data Analysis', years: '2022-Present' },
    { institution: 'Lakewood Ranch Highschool', degree: 'High School Diploma', years: '2018-2022' },
  ];

  return (
    <div className="education">
      <h2>Education</h2> {/* Section title */}
      {education.map((edu, index) => (
        // Render education details for each entry in the list
        <div key={index} className="edu-entry">
          <h3>{edu.institution}</h3> {/* Display institution name */}
          <p>{edu.degree}</p> {/* Display degree obtained */}
          <p>{edu.years}</p> {/* Display years attended */}
        </div>
      ))}
    </div>
  );
};

// Define the main App component that combines all sections
const App = () => {
  return (
    <div className="App">
      <PersonalInfo /> {/* Render PersonalInfo component */}
      <Skills /> {/* Render Skills component */}
      <Education /> {/* Render Education component */}
    </div>
  );
};

// Render the App component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render the App component into the DOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Render the App component into the DOM

