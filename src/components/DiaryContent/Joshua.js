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

const joshua = () => (
    
    <div>
        <pre>{Research}
            {week1}{`
This is the first week our team came together, our team had a 1.5 hours meeting. 
Discussion topic includes: 
• The direction our team is deciding to take regarding the project
• Project requirements, intentions and objectives.
• The methodology, roles, timeline.
• What we should research individually
• Cloud choice

Regarding the first point, generally we are talking about what kind of frameworks we’ll be using, programming languages, version control etc. this includes the prior understanding of each team member’s most proficient language.  One of my team members, suggested using React because both of us have past experience or exposure to react and it seemed to us this is practical. For now, we are still unsure but are taking in suggestion and is one of the few points that has to be confirmed on a later date. On a side note, our team’s members each has differing skill sets where we have different preferences for the language. So, before rushing to decide the programming language that we are going to use, the team agrees that it is better to leave this after we have sorted out fully understanding the project. And not to forget the version control, I suggested that we use git or GitHub as that is most used version control and will be useful skill to learn it now for the future. And this project is a very good opportunity.

The project requirement is to create an online automation system for SIM students and companies recruiting SIM graduates. I wanted to clearly understand functional and non-functional requirements aka Functionalities and Features.
After going diving through the net, I felt that this was the most clear-cut explanation given 
“Features are what your program can do. Features are a direct result of user requirements, and business objectives. Thus, a program's features exist mainly to meet user demands.

Functionality, on the other hand, is how the aforementioned features are actually implemented.”
(Taken from https://softwareengineering.stackexchange.com/questions/94164/feature-vs-function)

Breaking down the project I get this:
    •	We are to develop a web application.
    •	The feature includes:
        o	Login portal for Students & Recruiters respectively.
        o	Personal & Professional profile of Students.
            	Permission to change privacy settings
            	Potentially about profile visibility, who can connect/message
        o	Details of Recruiters
            	Company name
            	Jobs
                •	Title
                •	Vacancy spots
                •	Description
                •	Job scope
                •	Criteria (requirements)
    •	Students Actions
        o	View Recruiters (Active)
        o	Apply for job (Active)
        o	Notified about potential jobs (Based on interest and qualifications)
            	Only if profile is set to public
    •	Recruiters Actions
        o	View profile of the list of Students that applied
        o	Initiate a communication with targeted student (Optional)
    •	Admin Actions
        o	Access to all portals
        o	Handles all login credentials.
        o	Permission to modify information when & where necessary
        o	Generate various reports ( Need more information ) to SIM
            	Reports excludes personal identity of Students
            	To understand employability of graduates
    •	Data
        o	All data stored in the cloud
            	AWS

The intention and objective of the project is clear, which is to increase the employment rate for SIM graduates and also creating more opportunity and exposure for the graduates and recruiters respectively.
`}{Analyst}{week2}{`
The objective of this week is to Market, Product and Methodologies research.
For my part I have chosen to research the following products (recruitment websites):
• FastJobs
• JobsCentral
• JobsDB
• JobStreet

There are a few crucial points which I look at immediately when researching these websites:
• Overall of the home page aesthetics (the intuitiveness of it)
• Login process
• Functionalities
• Special feature of the recruitment site
• How much control the user has over his/her profile
• Searching capabilities
The details of each point for the website will be included in the proposal document.
Especially since we each note down a key feature of that website that will be compared against our own project.

Next, I looked at the tools that would be used for the entirety of our project such as:
• Track status of project
• Version Control 
• Central repository
• IDE
• Drawing diagrams
• Communications and Collaborative platform

For tracking the status of the project, one of my team mates mentioned a tool, Trello; an online scrum board.  Which suits our need perfectly, since we’re doing it the agile way.
We will be using Git for our version control, Microsoft Visual Studio Code for our IDE.
Central repository we have Github.
For diagrams such as UML diagrams, we have umlet or draw.io.
Last but not least, for communications and collaborations we have WhatsApp, Discord, Skype and Google docs.
I familiarised myself with using Git through terminal and through Github, as well as familiarising with Trello as these two will be important for every stage of the project. 
Trello is immensely useful as it allow a project to manage their task and progress. After watching several tutorials on YouTube and trying it out on my own. I am more confident when our project starts picking up its pace, this is provided that everyone in the team puts in the conscious effort to update and stick to the task given. But more importantly, during projects there may be some sparks of idea in the moment, but shouldn’t be implemented at that point of time can be stored safely in a list on Trello.

Regarding the methodology that we are going to use, I suggested using Agile. Through past work experiences and the research done on this topic. The research result and information will be listed in the proposal document for selecting agile. 
But here is the link for the article used for comparison: https://acodez.in/12-best-software-development-methodologies-pros-cons/

Agile is most suitable for projects that are iterative and incremental, which very much how this project will be. Furthermore, agile was developed originally for software development.
The most important aspect of agile is the sprint plan, where a common sprint time is around 2 weeks. And for these 2 weeks, a goal or target must be achieved, if achieved earlier the party can continue to do more until the due time.
`}{week3}{`
This week’s objective is update our Proposal plan that is set up on Google documents, thereafter I did a research on AWS - mainly about companies/organizations that makes use of AWS.

I updated the proposal for the preliminary research, key features and  development methodologies.

Next , I did the AWS research  to let the team understand who and what kind of organization/companies make use of cloud so that we can grasp an idea of how these organization utilise the cloud services to boost their own companies productivity/services.

One such website to find out specifically which companies uses AWS is on amazon’s website itself, the link is here https://aws.amazon.com/solutions/case-studies/__
On the site we can find such organisations are categorised into three categories:
• Enterprises
• Startups
• Public Sector

Furthermore, there is even a latest case studies section where it talks about how a specific company makes use of AWS to overcome an issue or boost their own services.
Although we are just building a web app, it is never bad to have more practical knowledge about industrial standards of implementation.  

Next it was to research on websites that utilises AWS for their services and have a look at the website, then derive how the website utilises AWS in what possible ways. To derive is to learn, hence it is also a very good experience for the me to approach an issue in this manner.

I took a look at Netflix, Pinterest and AirBnb. Although the concept and goal of such websites vastly differ from our project, I felt that there are still some aspects that is similar to our project.
Such as database handling, for user accounts, where the data are stored and accessed  etc.
Essentially, it is still a consumer based website. So I can still draft out some ideas, on how the our website can proceed when we meet certain milestones.
`}{week4}{`
This week’s objective was to draft out the UML diagrams for our project. For my part, I did Use case diagram, along with one of my team mate. On the side, I also went to practise using Git on my own projects to practise certain functionalities.

I looked through tutorials on youtube on how to do a proper Use case diagram, and also looked through several past assignments I did during year 2 and year 3 for my use case diagrams.  This is to ensure that I can do my Use case diagram appropriately, and is according to how our project is assumed to operate within.  To sum it up, there are three actors in our Use case diagram:
•  Student
• Recruiter
• Admin

And after looking through several recruitment sites and brainstorming how our project should operate, only then did I start on the diagram. 

Articles for refreshing my git knowledge: 
https://ourcodingclub.github.io/2017/02/27/git.html (Includes a comprehensive knowledge for git and GitHub, and commands on terminal for Git)
https://dev.to/juni/git-and-github---must-know-commands-to-make-your-first-commit-333c
Next is practising on Github, although I have prior experiences with GitHub. I have never truly operated within a large scale project through Github, I have always used GitHub for my own personal projects. I dived into researching branching and merging, version control. 

Additionally, I decided to end my week with a research on tips for Final-year projects.
These are the few resources I browsed through.
• What You Have To Consider During Your Final Year Project Training?
	(https://www.excelptp.com/tips-for-final-year-project-training.html)
• Tips for Final Year Project on Web Application Development
	(https://www.tops-int.com/blog/tips-for-final-year-project-on-web-application-development/)

 
To summarise what I have taken away from these two articles. 
•	Find out more about your strengths and weaknesses
Only by knowing more about myself will I know what I am capable of, and also how much I can take on at one time. It’d be a shame to let my weakness hinder my progression without myself knowing.
•	Focus more on the learning rather than the grade you’ll be getting.
Students tend to focus on the grade, while forgoing the process of developing the project. The knowledge learned stays with the students, while striving for higher grades merely reflects how well done the project is. In other words, high grades don’t necessarily reflect that a student is well-learned, while on the other hand, a student that is consistently focused on learning will undoubtedly do well the further he progresses.

•	Read, read, read. Stay updated on the technology.
Staying updated is important, especially when transitioning to work force. If the project used basic and outdated technology, while in the market there already exist advanced versions. This will put us in awkward positions as we’ll have learned obsolete stuff and got to learn the advanced version which is very inefficient.

•	Strife for the practical experience that you can take away
As it suggests, practical experience is important no doubt. Because that will show how well our product will be able to serve the target audience when completed.

•	Improve and strengthen technical and non-technical skills
Technical skills are straight forward, as for non-technical skills such as communication, inter-relations etc. Those are important, because we won’t be working solo but with other developers and potentially communicate with stakeholders, Project owners etc.  

•	Use frameworks!
To make things more efficient! Rather than inventing the wheel, why not use the wheel kind of analogy.
`}{week5}{`
This is the week for proposal submission, so the objective of this week is to finalise our proposal plan.   So far the proposal plan has:
• Preliminary Research that is inclusive of Market and Product research
• Key features of each product that we researched
• Tools that will be used
• Development Methodologies
• UML diagrams

We were left with Roles and Responsibilities, Project schedule and Project introduction, hence I did a draft of project schedule and updated on the project introduction. And we quickly settled the Roles and responsibilities. 
I vetted and double checked the proposal plan before submission. 

One of my team mate asked a question about what language to use for our backend, after a quick discussion. After a quick search on the net, I found out that the choice of backend and database has nothing to do with the choice of framework on the front-end. That leaves us with a vast amount of possible language to choose from. 
We could use PHP or C# but not all members would have experience with that, however if it was done in C++ everyone in the team is comfortable with it, but not forgetting Ruby, Python, .Net and Java because we have to consider simplicity and efficiency as well. However, no confirmations were made as of now.  Hence, we will put PHP in our proposal for now but it is not a confirmation.
`}{week6}{`
This week’s objective is to quickly pick up HTML, CSS and JavaScript.
Because in React, it is better to be familiar with these 3 key points because of JSX.

I started out on learning the basics of React, mainly on the topics of JavaScript XML (JSX).  JSX is used by React that seems like HTML but is in fact JavaScript. However, this is not very difficult to pick up, as I have had used JavaScript before as well as HTML5.  But upon diving into learning JSX, I realised that my JavaScript was very rusty, and I had a knowledge gap with current updates such as the use of Arrow functions. Which is a very important feature that is used a lot in JSX. Hence I spent the rest of the week practising JavaScript on hackerrrank’s 10 days of JS.

In conclusion, I managed to complete enough of JS to be competent enough for the JavaScript part of JSX. The mistake on my part was that I fail to realise there was a knowledge gap with my prior status of JavaScript skills,  and diving right into React environment that way was terrible. 
To summarise what I have done through the week on JavaScript:
• Variables (let and const)
• Conditional Statements
• Arrays
• Loops
• Error Handling (Try, Catch, Finally)
• Objects
• Classes
• Inheritance
• Template Literals
• Functions & Arrow Functions
• RegEx

For HTML and CSS, I had to refresh myself through codecademy and ultimately, I practised by building a simple website for myself with basic HTML and CSS.
`}{week7}{`
This week’s objective was to quickly pick up the basics of React, and built simple projects based on React. I started learning the basics from the website reactjs.org.  
I learned about stateful (class) components and stateless (functional) components, along with manipulating data using props. A simple project that I made to practise was manipulating objects and states, in a dynamic way. 
The researching phase is over, hence a shorter diary to summarise and conclude what I have done.
`}{Design}{week8}{`
This week our team started on the prototype, the task was to develop a login page, student profile page, employer profile page, admin page, job search page and set up the backend for login.

We broke up into teams of two to complete different section of the project. For my part, I was partnered up with Siddharth to complete the Student profile page. 

This week we designed the navigation bar and side-drawer  (pop up) menu. This was done through many research and practise until we got the desired effect we wanted.
`}{Development}{week9}{`
This week’s objective is to continue developing the respective parts of the prototype that every subgroup is responsible for.  Siddharth and I continued from where we left off previously, and this week we developed the Student profile page, that is inclusive of related information and forms that can be filled in.

The relation information are:
• Personal Particulars
• Education
• Work experience
• Job Preference
• Awards
• Certification
• Projects
`}{week10}{`
This week is the documentation week, hence we had to complete our documentation for our prototype, presentation slides and collate all personal diaries and group meeting minutes.

I created a folder in our GitHub repository to store all respective members personal diaries. Created and completed the user manual doc and the technical design manual.
`}{week11}{`
This week is the assignment submission week.  I finalised the documentation and vetted it with my partner Siddharth, to prepare for submission.  

Edited the Presentation slides, User manual and Technical Manual.

I also emailed my advisor to ask for any critical information that we might have missed out.
`}</pre>
</div>
);

export default joshua;