import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EducationItem from './EducationItem';

const degrees = [
  {
    name: 'Full Stack Developer Bachelor',
    school: 'OpenClassrooms',
    timeline: '2018-Present (expected end of 2018)',
    description:
      'HTML5, CSS3, Javascript, React, Ruby on Rails, MySQL, UML, Agile workflow',
    degree: true
  },
  {
    name: 'Cooking High-School Degree (Baccalaureate)',
    school: 'CFA Médéric Paris',
    timeline: '2010-2012',
    description: 'Apprenticeship',
    degree: true
  },
  {
    name: 'Cooking Professional Certificate (CAP)',
    school: "Faculté des métiers d'Evry",
    timeline: '2008-2010',
    description: 'Apprenticeship',
    degree: true
  },
  {
    name: 'Google Front End Developer Scholarship',
    school: 'Google/Udacity',
    timeline: '2017-2018',
    description:
      'Won a scholarship from Google<br />HTML5, CSS3, Javascript, jQuery',
    degree: false
  },
  {
    name: 'Stephen Grider Courses',
    school: 'Udemy',
    timeline: '2017-Present',
    description:
      '<ul class="pl-0"><li>GraphQL with React</li><li>Advanced React and Redux</li><li>Node with React: Fullstack development (Express, MongoDB)</li><li>Meteor and React for Realtime Apps</li><li>Modern React with Redux</li><li>...</li></ul><a href="https://www.udemy.com/user/franck-boudraa" target="_blank" rel="noopener noreferrer">Click to view full list</a>',
    degree: false
  },
  {
    name: 'Miscellaneous Courses',
    school: 'Non-exhaustive list',
    timeline: '2005-Present',
    description:
      '<ul class="pl-0"><li>Michael Hartl’s Ruby on Rails Book</li><li>David Heinemeier Hansson’s Rails 5 Book</li><li>Site du Zero 2005 (former OpenClassrooms): HTML, CSS, PHP, MySQL</li></ul>',
    degree: false
  }
];

export default class EducationList extends Component {
  render() {
    const renderItems = degrees.map(
      ({ name, school, timeline, description, degree }) => {
        if (degree !== this.props.degreeFilter) {
          return false;
        }
        return (
          <EducationItem
            name={name}
            school={school}
            timeline={timeline}
            description={description}
            key={name}
          />
        );
      }
    );

    return <div className="row">{renderItems}</div>;
  }
}

EducationList.propTypes = {
  name: PropTypes.string,
  school: PropTypes.string,
  timeline: PropTypes.string,
  description: PropTypes.string,
  degree: PropTypes.bool,
  degreeFilter: PropTypes.bool
};
