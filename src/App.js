import React, { useState } from 'react';
import './App.css'; 
import img1 from './imagesRest/favour.jpg';

const internsData = [
  {
    id: 1,
    name: 'Intern 1',
    picture: img1,
    info: 'Junior Developer Intern',
    grades: [80,90,90,100] 
  },
  {
    id: 2,
    name: 'Intern 2',
    picture: img1,
    info: 'Software Engineering Intern',
    grades: [70,60,80, 70] 
  },
  {
    id: 3,
    name: 'Intern 3',
    picture: img1,
    info: 'Product Designer',
    grades: [100, 100,96,89] 
  },
  {
    id: 3,
    name: 'Intern 4',
    picture: img1,
    info: 'WEB 3.0',
    grades: [50,70,80, 95] 
  }
];

const InternCard = ({ intern }) => {
  const totalGrades = intern.grades.reduce((total, grade) => total + grade, 0);
  const averageGrade = totalGrades / intern.grades.length;

  return (
    <div className="intern-card">
      <img src={intern.picture} alt={intern.name} />
      <div className="intern-info">
        <h2>{intern.name}</h2>
        <p>{intern.info}</p>
        <p>Average Grade: {averageGrade.toFixed(2)}</p>
      </div>
    </div>
  );
};

const InternDashboard = () => {
  const [interns] = useState(internsData);

  // Function to find the intern with the highest average grade
  const findTopIntern = () => {
    let topIntern = interns[0];
    let highestAverage = 0;

    interns.forEach(intern => {
      const totalGrades = intern.grades.reduce((total, grade) => total + grade, 0);
      const averageGrade = totalGrades / intern.grades.length;

      if (averageGrade > highestAverage) {
        topIntern = intern;
        highestAverage = averageGrade;
      }
    });

    return topIntern;
  };

  const topIntern = findTopIntern();

  return (
    <div className="intern-dashboard">
      <h1 className="text-center topper">Intern Dashboard</h1>
      <div className="intern-cards">
        {interns.map(intern => (
          <InternCard key={intern.id} intern={intern} />
        ))}
      </div>
      <div className="top-intern higher">
        <h2 className="text-center">Top Intern</h2>
        <InternCard intern={topIntern} />
      </div>
    </div>
  );
};

export default InternDashboard;
