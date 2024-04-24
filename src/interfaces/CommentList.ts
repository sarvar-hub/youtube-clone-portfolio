interface IInsideSnippet {
  authorProfileImageUrl: string;
  authorDisplayName: string;
  textOriginal: string;
  likeCount: string;
}

interface ITopLevelComment {
  snippet: IInsideSnippet;
}

interface ISnippet {
  topLevelComment: ITopLevelComment;
}

interface ICommentList {
  snippet: ISnippet;
}

export default ICommentList;
