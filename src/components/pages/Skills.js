import '../../css/Skills.css';
import cplusplus from '../../pics/skillslogos/c++.png';
import python from '../../pics/skillslogos/python.png';
import react from '../../pics/skillslogos/react.png';
import html from '../../pics/skillslogos/html.png';
import css from '../../pics/skillslogos/css.png';

function Skills() {
  return(
    <div className="skillsBackground">
      <div className="skillsheader"></div>

      <a href="https://www.cplusplus.com/" target="_blank" rel="noreferrer">
        <img title="C++" alt="C++ logo" src={cplusplus} class="rotate" style={{height: "30%",width: "20%", padding:"5%"}}/>
      </a>

      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img title="Python" alt="Python logo" src={python} class="rotate" style={{height: "30%",width: "20%", padding:"5%"}}/>
      </a>

      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img title="React" alt="React logo" src={react} class="rotate" style={{height: "35%",width: "35%",padding:"2%"}}/>
      </a>

      <a href="https://html.com/" target="_blank" rel="noreferrer">
      <img title="HTML" alt="HTML logo" src={html} class="rotate" style={{height: "30%",width: "20%", padding:"5%"}}/>
      </a>

      <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noreferrer">
      <img title="CSS" alt="CSS logo" src={css} class="rotate" style={{height: "30%",width: "20%", padding:"5%"}}/>
      </a>
    </div>
  );
}

export default Skills;
