import React, { Component } from 'react';

import ExperiencesList from './ExperiencesList';

class Experiences extends Component {
  render() {
    return (
      <section id="experiences" className="experiences-section section">
        <h2 className="section-title">Experiences</h2>
        <div className="timeline">
          <ExperiencesList />
        </div>
      </section>
    );
  }
}

export default Experiences;
