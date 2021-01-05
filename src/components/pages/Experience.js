import '../../css/Experience.css';
import gp from '../../pics/gradplanner.jpeg'

function Experience() {
  return(
  <div className="experienceBackground">
    <img src={gp} className="experiencePic"/>
    <div className="experienceTitle">Grad Planner (Fall 2019 - Fall 2020)</div>
    <div className="experienceSummary">
      In the fall of 2019 what started as a group project in Design
      <br/>and Management of Software quickly evolved into a real
      <br/>idea that the team wanted to pursue. Throughout the following
      <br/>year we joined the Bronco Venture Accelerator to get it rolling.
      <br/>Sponsored by Santa Clara University, I became a lead software
      <br/>engineer in charge of web, algorithm, and database development.
      <br/>I primarily used C++, Python, HTML/CSS, and React. Our product
      <br/> was a class scheduler that optimally plans out a student's
      <br/>fastest path towards graduation. The algorithm dealt with the
      <br/>NP-Hard problem of class scheduling in under one minute.
      <br/>Additionally I assisted in primary and secondary interviewing
      <br/>as well as large scale project planning.
    </div>
  </div>
  );
}

export default Experience;
