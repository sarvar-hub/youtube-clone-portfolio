import SideBar from "@/components/SideBar";
import "./style.css"
import Feed from "@/components/Feed";
import { useState } from "react";

interface IHomeProps {
  sidebar: boolean;
}

const Home = ({sidebar}:IHomeProps) => {
  
  const [category, setCategory] = useState(0);

  return (
    <>
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar?'':'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home;
