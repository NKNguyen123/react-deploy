import '../../css/Skills.css';
import cplusplus from '../../pics/skillslogos/c++.png';
import python from '../../pics/skillslogos/python.png';
import react from '../../pics/skillslogos/react.png';
import html from '../../pics/skillslogos/html.png';
import css from '../../pics/skillslogos/css.png';
import spark from '../../pics/skillslogos/spark.png';
import sharepoint from '../../pics/skillslogos/sharepoint.png';
import powerautomate from '../../pics/skillslogos/powerautomate.png';


function Skills() {
  return(
    <div className="skillsBackground">
    <div className="skillsheader"></div>

      <a href="https://www.cplusplus.com/" target="_blank" rel="noreferrer">
        <img title="C++" alt="C++ logo" src={cplusplus} class="rotate" style={{height: "20%",width: "15%", padding:"3%"}}/>
      </a>

      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img title="Python" alt="Python logo" src={python} class="rotate" style={{height: "20%",width: "15%", padding:"3%"}}/>
      </a>

      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img title="React" alt="React logo" src={react} class="rotate" style={{height: "25%",width: "25%",padding:"2%"}}/>
      </a>

      <a href="https://html.com/" target="_blank" rel="noreferrer">
      <img title="HTML" alt="HTML logo" src={html} class="rotate" style={{height: "20%",width: "15%", padding:"3%"}}/>
      </a>

      <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer">
      <img title="CSS" alt="CSS logo" src={css} class="rotate" style={{height: "20%",width: "15%", padding:"3%"}}/>
      </a>

      <a href="https://spark.apache.org/" target="_blank" rel="noreferrer">
      <img title="Spark" alt="Spark logo" src={spark} class="rotate" style={{height: "20%",width: "15%", padding:"3%"}}/>
      </a>

      <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration" target="_blank" rel="noreferrer">
      <img title="SharePoint" alt="SharePoint logo" src={sharepoint} class="rotate" style={{height: "30%",width: "30%", padding:"2%"}}/>
      </a>

      <a href="https://powerautomate.microsoft.com/en-us/" target="_blank" rel="noreferrer">
      <img title="Power Automate" alt="Power Automate logo" src={powerautomate} class="rotate" style={{height: "20%",width: "15%", padding:"3%"}}/>
      </a>
    </div>
  );
}

export default Skills;
