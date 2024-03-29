export type Video = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };

      medium: {
        url: string;
        width: number;
        height: number;
      };

      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

export type Playlist = {
  userID: string;
  video: Video;
};

export type FindPlayList = {
  youtube: string;
};

export type SearchForm = {
  titleText: string;
};

export type GetPlayListType = {
  id: number;
  userID: string;
  created_at: string;
  youtube: string;
};
