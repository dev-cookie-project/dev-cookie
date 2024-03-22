export type hashSelection = {
  hash: string;
};
export type hashSelectionList = hashSelection[];

export type review = {
  userID: number;
  created_at: string;
  projectOrStudy: number;
  title: string;
  contents: string;
  heshSelection: string[];
  ongoing: boolean;
};

export type reviewList = review[];
