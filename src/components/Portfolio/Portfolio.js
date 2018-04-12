import React, { Component } from 'react';
import PortfolioList from './PortfolioList';

class Portfolio extends Component {
  render() {
    return (
      <section id="projects" className="portfolio-section section">
        <h2 className="section-title">Projects</h2>
        <PortfolioList />
      </section>
    );
  }
}

export default Portfolio;
