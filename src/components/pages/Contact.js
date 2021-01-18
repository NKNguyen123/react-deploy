import '../../css/Contact.css';
import github from '../../pics/contactlogos/github.png';
import linkedin from '../../pics/contactlogos/linkedin.png';
import gmail from '../../pics/contactlogos/gmail.png';

function Contact() {

  return(
    <div className="contactBackground">
      <div className="contactheader"></div>

      <a href="https://github.com/NKNguyen123" target="_blank" rel="noreferrer">
        <img title="Click for my Github" alt="Github logo" src={github} class="rotate" style={{height: "30%",width: "20%", padding:"5%"}}/>
      </a>

      <a href="http://linkedin.com/in/neil-dk-nguyen" target="_blank" rel="noreferrer">
        <img title="Click for my Linkedin" alt="Linkedin logo" src={linkedin} class="rotate" style={{height: "30%",width: "20%", padding:"5%"}}/>
      </a>

      <a href="mailto:neil.bme@gmail.com">
        <img title="Click to copy my Gmail to your clipboard" alt="Gmail logo" src={gmail} class="rotate" style={{height:"30%", width:"20%", padding:"5%"}}/>
      </a>
    </div>
  );
}

export default Contact;
