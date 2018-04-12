import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import findyourslice from '../../img/findyourslice.PNG';
import portal from '../../img/portal.PNG';
import logparser from '../../img/logparser.PNG';

import weather from '../../img/weather.PNG';
import ToDoApp from '../../img/ToDoApp.PNG';

const items = [
  {
    name: 'Find Your Slice',
    context: 'An app to find restaurants',
    githubUrl: 'https://github.com/sujithagrajan/find-your-slice-v1',
    githubLink: 'View on Github',
    projectLink: 'Preview',
    projectUrl: 'https://sg-find-your-slice.herokuapp.com/',
    stack: [
      'React',
      'Express',
      'Javascript',
      'Bootstrap'
     
    ],
    description: '',
    image: findyourslice
  },
  {
    name: 'Portal',
    context: 'Online portfolio for Boot camp students similar to Hired.com',
    githubLink: 'Sorry No Github',
    projectLink: 'Preview',
    projectUrl: 'https://origin-portal.herokuapp.com/',
    stack: [
      'NodeJS',
      'React',
      'Loopback',
      'MongoDB',
      'Amazon S3',
      'Bootstrap',
      'Stylus'
    ],
    description: '',
    image: portal
  },
  {
    name: 'Web Server Access Log Parser',
    context: 'Tool to parse web server access log file',
    githubUrl: 'https://github.com/sujithagrajan/WebServerAccessLogParser',
    githubLink: 'View on Github',
    
    stack: [
      'Java',
      'MySQL'
    ],
    description: '',
    image: logparser
  },
   {
  name: 'To Do App',
  context: 'A To Do App for adding todo items with priority',
  githubLink: 'https://github.com/sujithagrajan/startnow-react100-vstda',
  projectLink: 'Preview',
  projectUrl: 'https://sg-react100-vstda.herokuapp.com/',
  stack: [
    'NodeJS',
    'React',
    'Express',
    'Bootstrap'
    ],
  description: '',
  image: ToDoApp
  },
  {
    name: 'Weather Station ',
    context: 'To collects real time environmental data and sends on a mobile device via BLE',
    githubUrl: 'https://github.com/sujithagrajan/WeatherStation',
    githubLink: 'View on Github',
    
    stack: [
      'Embedded C',
      ],
    description: '',
    image: weather
  },

  
];

class PortfolioList extends Component {
  render() {
    const renderItems = items.map(
      ({
        name,
        context,
        githubUrl,
        githubLink,
        stack,
        image,
        projectLink,
        projectUrl,
        
        description
      }) => {
        return (
          <PortfolioItem
            name={name}
            context={context}
            githubUrl={githubUrl}
            githubLink={githubLink}
            projectLink={projectLink}
            projectUrl={projectUrl}
            
            stack={stack}
            image={image}
            description={description}
            key={name}
          />
        );
      }
    );
    return <div className="items-wrapper row">{renderItems}</div>;
  }
}

export default PortfolioList;
