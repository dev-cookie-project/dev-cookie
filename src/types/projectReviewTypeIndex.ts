export type HashSelection = {
  hash: string;
};
export type HashSelectionList = HashSelection[];

export type Review = {
  userID: string;
  created_at: string;
  projectOrStudy: number;
  title: string;
  contents: string;
  heshSelection: string[];
  ongoing: boolean;
};

export type Reviews = {
  id: number;
  userID: string;
  created_at: string;
  projectOrStudy: number;
  title: string;
  contents: string;
  heshSelection: string[];
  ongoing: boolean;
};

export type ReviewList = Reviews[];

export type NewRivewType = {
  userID: string;
  title: string;
  tags: string[];
};

export type ReviewType = {
  id: number;
  userID: string;
  title: string;
  tags: string[];
};
