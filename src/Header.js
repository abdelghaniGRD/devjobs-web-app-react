import sun from "./assets/desktop/icon-sun.svg";
import night from "./assets/night.png";
import light from "./assets/light.png";
import moon from "./assets/desktop/icon-moon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const handleModeClick = () => {
    document.body.classList.toggle("dark-mode");
  };
  return (
    <div className="header">
      <div className="content">
        <Link to="/devjobs-web-app">devjobs</Link>

        <div className="light-mode" onClick={handleModeClick}>
          <img src={sun} alt="sun"></img>
          <img src={light} className="light" alt="light"></img>
          <img src={night} className="night" alt="night"></img>
          <img src={moon} alt="group"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
