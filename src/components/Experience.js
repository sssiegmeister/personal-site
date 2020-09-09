import React, { Component } from 'react';
import Content from './Content';
import data from './../Exp-Items';

const text = ["For a year and a half I was on the organizing team for TechTogether Boston, Boston's largest all female, femme, and non binary hackathon. It was an incredible experience, and I was proud to be a part of this organization for the 2019 and 2020 events, with the mission to empower gender marginalized groups to lead successful lives in the tech industry. Learn more about TechTogether's mission",
 "In 2019 I completed a six month software development co-op at Desktop Metal, a metal 3D printing system company located in Burlington, MA. I helped improve the accuracy of the production printer PLC simulator using TypeScript and React, and I also developed and moderated a dynamic HTML report in R of printer data and integrated with Slack, which was presented to customers. In this co-op I followed an agile development methodology, and practiced cross team collaboration."]

class Experience extends Component {
  render() {
    return (
      <div>
        {data.map((x, i) => (
          <Content direction={i % 2 === 0 ? 'left' : 'right'} text={x.text} logo={x.logo}/>
        ))}
      </div>
    );
  }
}

export default Experience;