import { atom } from "jotai";
import { Comment } from "../types/comment-types";
import { sampleComment } from "@/assets/sample-comment";

// UseCommentReturn 인터페이스 정의
export interface UseCommentReturn {
  comments: Comment[];
  handleAddComment: (newComment: Comment) => void;
  handleRemoveComment: (commentId: number) => void;
  editingComment: Comment | null;
  handleSetEditingComment: (comment: Comment) => void;
  handleEditComment: (updatedComment: Comment) => void;
}

// 기본 댓글 상태 atom
export const commentsAtom = atom<Comment[]>([sampleComment]);

// 댓글 추가를 위한 atom
export const addCommentAtom = atom(null, (get, set, newComment: Comment) => {
  const currentComments = get(commentsAtom);
  set(commentsAtom, [newComment, ...currentComments]);
});

// 댓글 삭제를 위한 atom
export const removeCommentAtom = atom(null, (get, set, commentId: number) => {
  set(
    commentsAtom,
    get(commentsAtom).filter((comment) => comment.id !== commentId)
  );
});

// 댓글 수정을 위한 atom
export const editCommentAtom = atom(
  null,
  (get, set, updatedComment: Comment) => {
    set(
      commentsAtom,
      get(commentsAtom).map((comment) =>
        comment.id === updatedComment.id
          ? { ...comment, ...updatedComment }
          : comment
      )
    );
  }
);

// 편집 중인 댓글 상태를 관리하기 위한 atom
export const editingCommentAtom = atom<Comment | null>(null);
