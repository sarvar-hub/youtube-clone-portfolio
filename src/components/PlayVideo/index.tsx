import { assets } from "@/assets";
import "./style.css"
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, value_converter } from "@/data";
import IVideoList from "@/interfaces/VideoList";
import moment from "moment";
import IChannelList from "@/interfaces/ChannelList";
import ICommentList from "@/interfaces/CommentList";
import { useParams } from "react-router-dom";

const PlayVideo = () => {

  const {videoId} = useParams();

  const [apiData, setApiData] = useState<IVideoList | null>(null);
  const [channelData, setChannelData] = useState<IChannelList | null>(null)
  const [commentData, setCommentData] = useState<ICommentList[] | []>([]);
  const [openComment, setOpenComment] = useState<boolean>(false);

  const fetchVideoData = async () => {
    const videoDetails_url = `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData = async () => {
    if(apiData) {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`; 
      await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
      await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }
  }


  useEffect(() => {
    fetchVideoData();
    window.scrollTo(0, 0);
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  },[apiData]);

  return (
    <div className="play-video">
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={assets.like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
          <span><img src={assets.dislike} alt="" /></span>
          <span><img src={assets.share} alt="" />Share</span>
          <span><img src={assets.save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{channelData?channelData.snippet.title:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr />
        <div className="show-comment">
          <button onClick={()=> setOpenComment(prev=>!prev)}>Comments</button>
        </div>
        <div className={`comment-section ${openComment?'active':''}`}>
          <h4>{apiData?apiData.statistics.commentCount:102} Comments</h4>
          {commentData.map((item, index) => {
            return (
              <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                  <div className="comment-action">
                    <img src={assets.like} alt="" />
                    <span>{Number(item.snippet.topLevelComment.snippet.likeCount)===0?"":value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={assets.dislike} alt="" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PlayVideo;
