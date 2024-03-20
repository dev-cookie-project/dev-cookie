import { useAtom } from "jotai";
import {
  commentsAtom,
  addCommentAtom,
  removeCommentAtom,
  editCommentAtom,
  editingCommentAtom,
} from "../store/comment-store";
import { Comment } from "../types/comment-types";

const useComment = () => {
  const [comments] = useAtom(commentsAtom);
  const [, add] = useAtom(addCommentAtom);
  const [, remove] = useAtom(removeCommentAtom);
  const [, edit] = useAtom(editCommentAtom);
  const [editingComment, setEditingComment] = useAtom(editingCommentAtom); // 상태 관리를 jotai로 통일

  const handleAddComment = (newComment: Comment) => {
    add(newComment);
  };

  const handleRemoveComment = (commentId: number) => {
    remove(commentId);
  };

  const handleSetEditingComment = (comment: Comment) => {
    setEditingComment(comment);
  };

  const handleEditComment = (updatedComment: Comment) => {
    edit(updatedComment);
    setEditingComment(null);
  };

  return {
    comments,
    handleAddComment,
    handleRemoveComment,
    editingComment,
    handleSetEditingComment,
    handleEditComment,
  };
};

export default useComment;
