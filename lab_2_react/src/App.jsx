import React from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'

const App = () => {
  const mySkills = [
    "Рівень англійської B2",
    "Вмію працювати з ОС Windows, Linux, MacOS",
    "Знаю мови програмування C, C++, C#, Python",
    "Вмію працювати з комп'ютерними мережами"
  ];

  return (
    <div className="resume-wrapper">
      <Header />
      <main>
        <Education 
          date="Червень 2027"
          degree="Закінчив бакалаврат за спеціальністю Кібербезпека"
          institution="НУ Львівська політехніка"
        />
        <Skills skillList={mySkills} />
      </main>
    </div>
  );
};

export default App;