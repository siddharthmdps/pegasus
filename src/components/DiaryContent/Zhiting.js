import React from 'react';
import classes from './Content.module.css';

const Research = <h1>Research Phase</h1>
const Analyst = <h1>Analyst Phase</h1>
const Design = <h1>Design Phase</h1>
const Development = <h1>Development Phase</h1>



const week0 = <h2>Week 0</h2>
const week1 = <h2>Week 1</h2>
const week2 = <h2>Week 2</h2>
const week3 = <h2>Week 3</h2>
const week4 = <h2>Week 4</h2>
const week5 = <h2>Week 5</h2>
const week6 = <h2>Week 6</h2>
const week7 = <h2>Week 7</h2>
const week8 = <h2>Week 8</h2>
const week9 = <h2>Week 9</h2>
const week10 = <h2>Week 10</h2>
const week11 = <h2>Week 11</h2>
const week68 = <h2>Week 6 - 8</h2>

const zhiting = () => (
    
    <div>
        <pre>{Research}
        {week1}
{`         
Exchanged contact and joined a common communication channel
Wrote the meeting minutes
Did a general project research to understand and familarise with features of existing products.
`}{week2}{`
Agreed on the tools suggested to be used for the project.
Did research on design methodologies, namely Extreme Programming (XP), Scrum and Scrumban (Scrum + Kanban).
Did Comparison for the similar products available in the market.
Examined the user experience for the current Online Recruitment website for SIM Graduates.
`}{Analyst}{week3}{`
Set up the FYP proposal google docs to allow concurrent editing and input by team members.
Added Introduction to the FYP Proposal.
Added Introduction to AWS and services offered.
Added Analysis of Cloud Computing.
`}{week4}{`
Added Use case specifications for student, company and admin.
`}{week5}{`
Helped with refining proposal
Confirmed agreement with project direction on items such as the react framework
`}{week68}{`
Familiarised self with the react framework.
`}{Development}{week9}{`
Come up with a rough design for employer’s dashboard.
`}{week10}{`
Made a prototype for Employer Dashboard.
Added stakeholders information into technical manual.
Added guide for using employer dashboard.
`}</pre>
</div>
);

export default zhiting;