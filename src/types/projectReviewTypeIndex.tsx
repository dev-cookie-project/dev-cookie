export type HashSelection = {
  hash: string;
};
export type HashSelectionList = HashSelection[];

export type Review = {
  userID: number;
  created_at: string;
  projectOrStudy: number;
  title: string;
  contents: string;
  heshSelection: string[];
  ongoing: boolean;
};

export type Reviews = {
  id: number;
  userID: number;
  created_at: string;
  projectOrStudy: number;
  title: string;
  contents: string;
  heshSelection: string[];
  ongoing: boolean;
};

export type ReviewList = Reviews[];
