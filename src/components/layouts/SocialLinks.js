import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands';

const items = [
  {
    key: 'li',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/sujitha-govindharajan-b95052126/',
  },
  {
    key: 'gh',
    icon: faGithub,
    url: 'https://github.com/sujithagrajan',
  },
];

class SocialLinks extends Component {
  render() {
    const renderItems = items.map(item => {
      return (
        <li className="list-inline-item" key={this.props.keyPrefix + item.key}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      );
    });
    return <ul className="social list-inline">{renderItems}</ul>;
  }
}
export default SocialLinks;

SocialLinks.propTypes = {
  keyPrefix: PropTypes.string,
};
