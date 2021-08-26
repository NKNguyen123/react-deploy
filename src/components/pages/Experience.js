import '../../css/Experience.css';
import gp from '../../pics/gradplanner.jpeg'
import maker from '../../pics/maker.jpeg'
import gilead from '../../pics/gilead.jpg'


function Experience() {
  return(
  <div className="experienceBackground">

    <div className="experienceBox">
      <img src={gp} alt="GradPlanner Team" className="experiencePic"/>
      <div className="experienceSummary">
        <div className="experienceTitle">Grad Planner (Fall 2019 - Fall 2020)</div>
        <div className="experienceCaption">Software Engineer in C++, Python, React</div>
        In the fall of 2019 what started as a group project in Design
        and Management of Software quickly evolved into a real
        idea that the team wanted to pursue. Throughout the following
        year we joined the Bronco Venture Accelerator to get it rolling.
        Sponsored by Santa Clara University, I became a lead software
        engineer involved in web, algorithm, and database development.
        I primarily used C++, Python, HTML/CSS, and React. Our product
         was a class scheduler that optimally plans out a student's
        fastest path towards graduation. The algorithm dealt with the
        NP-Hard problem of class scheduling in under one minute.
        Additionally I assisted in primary and secondary interviewing
        as well as large scale project planning.
      </div>
    </div>

    <div className="experienceBox">
      <img src={maker} alt="Maker Lab" className="experiencePic"/>
      <div className="experienceSummary">
        <div className="experienceTitle">Maker Lab (Fall 2019 - Spring 2020)</div>
        <div className="experienceCaption">Public Relations Officer and Workshop Leader</div>
        For the 2018-2019 school year I was a regular participant at this Santa Clara University
        organization, and the following year its board members left and I filled up one of the vacancies.
        In Maker Lab I learned how to operate complicated machinery like 3D Printers, laser cutters,
        various heavy woodworking tools, and more. In the 2019-2020 school year as an officer I taught my
        own workshop each quarter. My workshop responsibilities included designing the project,
        demonstrating how to operate the tools involved, and supervising the lab members for safety.
        Additionally, as PR chair I was required to advertise the club online via social media and make
        weekly promotional material.
      </div>
    </div>

    <div className="experienceBox">
      <img src={gilead} alt="Gilead Sciences" className="experiencePic"/>
      <div className="experienceSummary">
        <div className="experienceTitle">Gilead Sciences (Summer 2021)</div>
        <div className="experienceCaption">Laboratory Systems Information Intern</div>
        Before my summer began I accepted this position on what I like to call the "SharePoint Online Team" at Gilead.
        I was tasked with helping on their current large scale project: the migration of their previous SharePoint platform to
        the updated SharePoint Online. Here is where lots of different Gilead product informations were stored. I was able to learn
        many different softwares along the way like SharePoint Online, Power Automate, and Visio. I assisted in automating data
        migration, updating product pages, and producing project documentation like design specifications, flow diagrams, and entity mappings.
        Additionally I was able to sit in and present the work I contributed in leadereship meetings.
      </div>
    </div>


  </div>
  );
}

export default Experience;
