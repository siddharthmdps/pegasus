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

const san = () => (
    
    <div>
        <pre>{Research}
        {week1}{`
Started research on market (linkedin, etc.), database and system design and software development methodologies.
`}{Analyst}{week2}{`
Continued research on week 1 and started to document the results of my research to be used in the project proposal. Started discussing ideas and what language and tools we would use in preparation for next phase. Setup scrum board on Trello. Product discussion
`}{week3}{`
Define and gather project technical scope and requirements with the group, Design and requirements review with the group. Some of technical scopes include what software we would use for frontend, backend, database and cloud. Continue to work on scrum board.
`}{week4}{`
Continue to learn and explore AWS. Started learning node.js to be used in backend. I did some research on the components required to integrate frontend and backend together.
`}{week5}{`
Learning and exploring node.js and how to use it as a backend. Discuss and review on use-case scenarios and diagrams of the project. Preparations for the submission of project proposal.
`}{week6}{`
Started coding the basics building blocks for backend using node.js, such as setting up the ports and configurations, etc. Started research on how to connect node.js to MySQL database.
`}{week7}{`
Research on how we can integrate our project onto AWS. Started setting up AWS (EC2) to be used by the project. Discuss what we have learned, node.js, react, etc.
`}{Design}{week8}{`
Continue work on configuration management for the backend and cloud portion of the project that I started in week 6. I worked on connecting login page to backend and database so that the members can use it for their pages.
`}{Development}{week9}{`
I continued coding on node.js for our project’s backend piece and shared the group on how they can run it on their computers. For now, our project’s home page on cloud will be showing a countdown timer, counting down to the submission date.
`}{week10}{`
Discussion on requirements and work to be done in preparation for submission and presentation. Created database and tables just for login page on our AWS. Get the login page running on AWS.
`}{week11}{`
Continue work on coding node.js end point for creating new users. Preparing slides for presentation. 
`}</pre>
</div>
);

export default san;