import React from 'react';

const Education = ({ date, degree, institution }) => {
  return (
    <section>
      <h2>Освіта</h2>
      <article>
        <h3>{date}</h3>
        <p><strong>{degree} в "{institution}"</strong></p>
      </article>
    </section>
  );
};

export default Education;