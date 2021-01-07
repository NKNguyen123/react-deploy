import '../../css/Experience.css';
import gp from '../../pics/gradplanner.jpeg'

function Experience() {
  return(
  <div className="experienceBackground">
    <div className="experienceBox">
      <img src={gp} alt="GradPlanner Team" className="experiencePic"/>
      <div className="experienceSummary">
        <div className="experienceTitle">Grad Planner (Fall 2019 - Fall 2020)</div>
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
  </div>
  );
}

export default Experience;
