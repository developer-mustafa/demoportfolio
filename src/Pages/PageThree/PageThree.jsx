import "./PageThree.css";
import mustafa from "./about_page.png"
import { FaWhatsapp ,FaFacebook,FaLinkedin} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import Social from "../../Components/Social/Social";

const PageThree = () => {
  return (
    <>
      <div className="page-three-text-container">
        
      <div className="socials">
        <a href="https://www.facebook.com/Mustafa24hours" target="blank"><Social Icon={FaFacebook} /></a>
          
          <a href="tel:+8801840643946"><Social Icon={FaWhatsapp} target="blank" /></a>
          <a href="https://www.linkedin.com/in/developer-mustafa/" target="blank"><Social Icon={FaLinkedin} /></a>
          
          <a href="https://github.com/developer-mustafa" target="blank"><Social Icon={FaGithub} /></a>
          
        </div>
         <h2>
         Mustafa Rahman
        </h2> 
        <h2>
         Teacher and Full stack software developer
        </h2>
        <img style={{width:'20rem',marginBottom:'100px'}} src={mustafa}alt="" />

       

      </div>
    </>
  );
};

export default PageThree;
