import { assets } from "@/assets";
import "./style.css"
import { SetState } from "@/types";

interface ISidebarProps {
  sidebar: boolean;
  category: number;
  setCategory: SetState<number>;
}

const SideBar = ({sidebar, category, setCategory}: ISidebarProps) => {
  return (
    <div className={`sidebar ${sidebar? '':'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={assets.home} alt="home" /><p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={assets.game_icon} alt="game" /><p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={assets.automobiles} alt="automobiles" /><p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={assets.sports} alt="sports" /><p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={assets.entertaiment} alt="entertaiment" /><p>Entertaiment</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={assets.tech} alt="tech" /><p>Technology</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={assets.music} alt="music" /><p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={assets.blogs} alt="blogs" /><p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={assets.news} alt="news" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subcribed</h3>
        <div className="side-link">
          <img src={assets.jack} alt="profile_image" /> <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={assets.simon} alt="profile_image" /> <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={assets.tom} alt="profile_image" /> <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={assets.megan} alt="profile_image" /> <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={assets.cameron} alt="profile_image" /> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
