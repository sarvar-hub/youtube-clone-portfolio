import { SetState } from "@/types";
import "./style.css"
import { assets } from "@/assets"
import { Link } from "react-router-dom";

interface INavbarProps {
  setSidebar: SetState<boolean>;
}

const Navbar = ({ setSidebar }: INavbarProps) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={() => setSidebar(prev => !prev)} src={assets.menu} alt="menu_icon" />
        <Link to="/"><img className="logo" src={assets.logo} alt="logo" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={assets.search} alt="search_icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.jack} className="user-icon" alt="profile_icon" />
      </div>
    </nav>
  )
}

export default Navbar;
