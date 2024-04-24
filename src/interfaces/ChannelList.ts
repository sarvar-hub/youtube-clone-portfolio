interface IThumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface IThumbnail {
  default: IThumbnailItem;
  medium: IThumbnailItem;
  high: IThumbnailItem;
  standard: IThumbnailItem;
  maxres: IThumbnailItem;
}

interface ISnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: IThumbnail;
  country: string;
}

interface IStatistics {
  viewCount: string;
  videoCount: string;
  subscriberCount: string;
}


interface IChannelList {
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export default IChannelList;

