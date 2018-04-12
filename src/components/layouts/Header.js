import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUrl, checkTopButton } from '../../actions';

import { Link, scroller } from 'react-scroll';

import Sticky from 'react-stickynode';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faMapMarkerAlt
} from '@fortawesome/fontawesome-free-solid';

import '../../css/styles.css';
// import pic from '../../img/pic.jpg';

import SocialLinks from './SocialLinks';
import LinksList from './LinksList';

class Header extends Component {
  componentDidMount = () => {
    switch (this.props.history.location.pathname) {
      case '/about':
        return this.changeUrlTo('about');
      case '/education':
        return this.changeUrlTo('education');
      case '/experiences':
        return this.changeUrlTo('experiences');
      case '/skills':
        return this.changeUrlTo('skills');
      case '/projects':
        return this.changeUrlTo('projects');
      case '/contact':
        return this.changeUrlTo('contact');
      default:
        return this.changeUrlTo('');
    }
  };

  changeUrlTo = url => {
    scroller.scrollTo(url, {
      duration: 1000,
      smooth: true,
      offset: -80
    });
  };

  handleSetActive = to => {
    this.props.setUrl(to);
  };

  handleStickyChange = ({ status }) => {
    const { checkTopButton } = this.props;
    if (status === Sticky.STATUS_FIXED) {
      checkTopButton(true);
    } else {
      checkTopButton(false);
    }
  };

  render() {
    return (
      <header id="top" className="header">
      <Sticky
          enabled={true}
          innerZ={1000}
          onStateChange={this.handleStickyChange}
        >
          
          <div className="page-nav-space-holder d-none d-md-block">
          
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
            
        
              <div className="container">
                
                <LinksList />
                
              </div>
            </div>
          </div>
        </Sticky>
        
        

        <div className="intro">
          <div className="container text-center">
            <h1 className="name">Sujitha Govindharajan</h1>
            <div className="title">Full Stack Developer</div>
            <div className="profile">
              <div className="top-bar">
          
              <SocialLinks keyPrefix="header" />
          
              </div>
            </div>
          </div>
        </div>

        
      </header>
    );
  }
}

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default withRouter(
  connect(mapStateToProps, { setUrl, checkTopButton })(Header)
);

Header.propTypes = {
  history: PropTypes.object,
  setUrl: PropTypes.func,
  checkTopButton: PropTypes.func
};
