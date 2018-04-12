import React, { Component } from 'react';
import EducationList from './EducationList';

class Education extends Component {
  render() {
    return (
      <section id="education" className="education-section section">
        <h2 className="section-title">Education</h2>
        <h3 className="subtitle text-center">Degrees</h3>
        <EducationList degreeFilter={true} />
        <h3 className="subtitle text-center">Non-degree Courses</h3>
        <EducationList degreeFilter={false} />
      </section>
    );
  }
}

export default Education;
