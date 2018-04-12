import React, { Component } from 'react';
import { connect } from 'react-redux';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
// import pic from '../../img/pic.jpg';

import ContactForm from './ContactForm';
import SocialLinks from '../layouts/SocialLinks';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact-section section">
        <h2 className="section-title">Contact</h2>
        <div className="intro">
          {/* <img
            className="profile-image rounded-circle img-thumbnail"
            src={pic}
            alt=""
          /> */}
          <div className="dialog">
            
           
          </div>
        </div>
        <ContactForm
          loading={this.props.contact.loading}
          success={this.props.contact.success}
        />
        <SocialLinks keyPrefix="contact" />
      </section>
    );
  }
}

function mapStateToProps({ contact }) {
  return { contact };
}

export default connect(mapStateToProps, null)(Contact);
