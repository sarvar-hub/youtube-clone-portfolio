import "./style.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "@/data";
import { useEffect, useState } from "react";
import IVideoList from "@/interfaces/VideoList";
import moment from "moment";

interface IFeedProps {
  category: number;
}

const Feed = ({ category }: IFeedProps) => {

  const [data, setData] = useState<IVideoList[]>([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
  }

  useEffect(() => {
    fetchData();
  }, [category])

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        )
      })}
    </div>
  );
};

export default Feed;
