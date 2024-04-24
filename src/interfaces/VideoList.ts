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
  channelTitle: string;
  thumbnails: IThumbnail;
  categoryId: string;
  publishedAt: string;
  description: string;
  channelId: string;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface IVideoList {
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export default IVideoList;
