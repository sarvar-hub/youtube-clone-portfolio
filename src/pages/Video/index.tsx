import PlayVideo from "@/components/PlayVideo";
import "./style.css"
import Recommended from "@/components/Recommended";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Video = () => {

  const { categoryId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="play-container">
      <PlayVideo />
      {categoryId && <Recommended categoryId={categoryId} />}
    </div>
  )
}

export default Video;
