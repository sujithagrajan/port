import React, { Component } from 'react';

const skills = [
  'HTML5',
  'CSS3',
  'Git',
  'jQuery',
  'Bootstrap',
  'Semantic UI',
  'Memcached',
  'Redis',
  'PHP',
  'REST',
  'Photoshop'
];

export default class SkillsTags extends Component {
  render() {
    const renderTags = skills.map(skill => {
      return (
        <span className="skill-tag" key={skill}>
          {skill}
        </span>
      );
    });

    return <div className="misc-skills">{renderTags}</div>;
  }
}
