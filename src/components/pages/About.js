import '../../css/About.css';

function About() {
  return(
  <div className="aboutBackground">
    <div className="bio">
      I'm a graduate student at
      <a className="link" href="https://www.scu.edu/engineering/academic-programs/department-of-computer-engineering/graduate/" target="_blank" rel="noreferrer"> Santa Clara University's School of Engineering </a>
      currently studying for my Masters in Computer Engineering.
      I also have a Bachelor's in Computer Science with a minor in Mathematics from
      <a className="link" href="https://www.scu.edu/mathcs/" target="_blank" rel="noreferrer"> Santa Clara University's College of Arts and Sciences. </a>
      <br/>
      <br/>
      My interests include Front-End Web Development,
      Back-End Algorithm Development, Artificial
      Intelligence, and Product Management in
      Software Development.<br/>
      <br/>
      Relevant Courses Include: Machine Learning, Artificial Intelligence,
      Object-Oriented Programming, Data Structures,
      Design and Analysis of Algorithms, Programming Languages,
      Operating Systems, and Product Management in
      Software Development.<br/>
      <br/>
    </div>
  </div>
  );
}

export default About;
