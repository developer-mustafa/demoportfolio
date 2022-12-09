import "./Header.css";
import { CgInfinity } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        <CgInfinity className="logo" />
      <a style={{textDecoration:'none'}} target="blank" href="https://mustafa-portfolio2.netlify.app/"> developer Mustafa</a>
      </h1>

      <div className="nav">
        <h3>Front-end development</h3>
        <h3>Back-end development</h3>
        <h3>Database</h3>
        <h3>web design</h3>
      </div>

      <div className="header-right"></div>
    </div>
  );
};

export default Header;
