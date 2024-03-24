export interface Comment {
  id: number;
  content: string;
  userId: string;
  createdAt: string;
}

export type CommentList = Comment[];
