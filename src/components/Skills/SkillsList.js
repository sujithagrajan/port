import React, { Component } from 'react';
import SkillsItem from './SkillsItem';


const items = [
  {
    name: 'React',
    rating: 4,
    level: 'Advanced',
    description: `JSX, Redux<br /><br />
   
    `
  },
  {
    name: 'SQL',
    rating: 4,
    level: 'Advanced',
    description: `MySQL, PostgreSQL<br /><br />`
  },
  {
    name: 'NodeJS',
    rating: 3,
    level: 'Intermediate',
    description: `Express, Meteor<br /><br />
    `
  },
  {
    name: 'Javascript',
    rating: 3,
    level: 'Intermediate',
    description: `ES6, ES7, jQuery, EJS<br /><br />
   `
  },
  {
    name: 'Ruby',
    rating: 3,
    level: 'Intermediate',
    description: 'Rails'
  },
  {
    name: 'MongoDB',
    rating: 2,
    level: 'Beginner',
    description: 'Mongoose'
  },
  {
    name: 'GraphQL',
    rating: 1,
    level: 'Beginner',
    description: ''
  },
  {
    name: 'AWS',
    rating: 3,
    level: 'Intermediate',
    description: 'S3, EC2, SES, CloudFront, Route 53, RDS, ElasticBeanstalk'
  }
];

export default class SkillsList extends Component {
  render() {
    const renderItems = items.map(({ name, rating, level, description }) => {
      return (
        <SkillsItem
          name={name}
          rating={rating}
          key={name}
          level={level}
          description={description}
        />
      );
    });

    return <div className="row">{renderItems}</div>;
  }
}
