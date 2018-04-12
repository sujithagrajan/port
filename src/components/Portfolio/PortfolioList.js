import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

import brooklyn from '../../img/brooklyn3.jpg';
import portfolio from '../../img/portfolio.jpg';
import wondyland from '../../img/wondyland.jpg';
import monsterwin from '../../img/monsterwin.jpg';
import movegroove from '../../img/movegroove.jpg';
import catmash from '../../img/catmash.jpg';
import bbt from '../../img/bbt.jpg';

const items = [
  {
    name: 'Boulder Bike Tour',
    context: 'Demo Website (2018)',
    githubUrl: 'https://github.com/franckboudraa/oc-boulderbike-client',
    githubLink: 'View on Github',
    projectUrl: 'http://boulderbike.franckboudraa.me',
    stack: [
      'React',
      'Redux',
      'Semantic UI',
      'Ruby on Rails',
      'PostgreSQL',
      'Flickr API',
      'Google Maps API',
      'AWS S3, RDS (front, DB)',
      'Heroku (back)'
    ],
    description: '',
    image: bbt
  },
  {
    name: 'Cat Mash',
    context: 'Demo Application (2018)',
    githubUrl: 'https://github.com/franckboudraa/catmash-front',
    githubLink: 'View on Github',
    projectUrl: 'http://catmash.franckboudraa.me',
    stack: [
      'NodeJS',
      'React',
      'Semantic UI',
      'Redis',
      'AWS (front)',
      'Heroku (back)'
    ],
    description: '',
    image: catmash
  },
  {
    name: 'Move&Groove Fitness',
    context: 'Rails project for OC Fullstack path (2018)',
    githubUrl: 'https://github.com/franckboudraa/oc-movegroove',
    githubLink: 'View on Github',
    projectUrl: 'https://movegroove.herokuapp.com',
    stack: [
      'Ruby on Rails',
      'PostgreSQL',
      'Bootstrap 4',
      'Devise',
      'Facebook OAuth',
      'Sendgrid API',
      'Heroku'
    ],
    description: '',
    image: movegroove
  },
  {
    name: 'Personal Portfolio',
    context: 'Single Page App (2018)',
    githubUrl: 'https://github.com/franckboudraa/personal-portfolio',
    githubLink: 'View on Github',
    projectUrl: 'http://www.franckboudraa.me',
    stack: ['Javascript', 'React', 'Redux', 'Bootstrap 4', 'Formspree API'],
    description: '',
    image: portfolio
  },
  {
    name: 'Brooklyn Outdoor Film Festival',
    context: 'Mockup website for OC Fullstack path (2018)',
    githubUrl: 'https://github.com/franckboudraa/oc-brooklyn-festival',
    githubLink: 'View on Github',
    projectUrl: 'http://www.franckboudraa.me/oc-brooklyn-festival',
    stack: ['HTML5, CSS3', 'JS', 'Bootstrap 4', 'jQuery', 'Google Maps API'],
    description: '',
    image: brooklyn
  },
  {
    name: 'Games Platform #2',
    context: 'Entrepreneurial Project (2012-2014)',
    githubUrl: null,
    githubLink: 'No Github sorry',
    projectUrl:
      'https://web.archive.org/web/20141102111929/http://www.monsterwin.fr:80/',
    stack: [
      'HTML5',
      'CSS3',
      'JS',
      'jQuery',
      'Bootstrap',
      'PHP5',
      'MySQL',
      'Flash/AS3',
      'Memcached',
      'Amazon/Facebook API',
      'AWS',
      'OVH Dedicated'
    ],
    description: '(115k users)',
    image: monsterwin
  },
  {
    name: 'Games Platform #1',
    context: 'Online games platform (2005-2008)',
    githubUrl: null,
    githubLink: 'No Github in 2008',
    projectUrl:
      'https://web.archive.org/web/20071104134523/http://www.wondyland.com:80/index.php',
    stack: ['HTML, CSS', 'JS', 'PHP4', 'MySQL', 'Flash/AS2', 'Amazon API'],
    description: '(80k users)',
    image: wondyland
  }
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
        projectUrl,
        description
      }) => {
        return (
          <PortfolioItem
            name={name}
            context={context}
            githubUrl={githubUrl}
            githubLink={githubLink}
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
