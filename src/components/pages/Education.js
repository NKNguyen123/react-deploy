import '../../css/Education.css';
import sculogo from '../../pics/sculogo.png';


function Education() {
  return (
    <div className="educationBackground">

      <a href="https://www.scu.edu/" target="_blank" rel="noreferrer">
        <img src={sculogo} title="Santa Clara University" alt="sculogo" className="sculogo"/>
      </a>

      <div className="educationBox">
        Bachelor's in Computer Science with a Minor in Mathematics
        <br/>
        <br/>Master's in Computer Science and Engineering by Winter 2022
      </div>
    </div>
  );
}

export default Education;
