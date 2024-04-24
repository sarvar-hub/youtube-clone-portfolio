import "./style.css"
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "@/data";
import IVideoList from "@/interfaces/VideoList";
import { Link } from "react-router-dom";

interface IRecommendedProps {
  categoryId?: string;
}

const Recommended = ({ categoryId }: IRecommendedProps) => {

  const [apiData, setApiData] = useState<IVideoList[]>([]);

  const fetchData = async() => {
    const reletedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=45&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(reletedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
  }

  useEffect(() => {
    fetchData();
  },[categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item,index)=> {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Recommended;
