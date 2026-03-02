import React from 'react';

const Skills = ({ skillList }) => {
  return (
    <section>
      <h2>Навички</h2>
      <ul>
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        <li>
          Сертифікат CISCO: <a href="https://www.cisco.com/" target="_blank" rel="noopener noreferrer">www.cisco.com</a>
        </li>
      </ul>
    </section>
  );
};

export default Skills;