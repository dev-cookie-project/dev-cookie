"use client";
import React, { useState } from "react";
import useComment from "../../hooks/useComment";
import { Comment } from "../../types/comment-types";

const CommentForm: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const { handleAddComment } = useComment();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) return;

    const userId = "1";
    const createdAt = new Date().toISOString();

    const newComment: Comment = {
      id: Date.now(),
      content,
      userId,
      createdAt,
    };
    handleAddComment(newComment);

    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="댓글을 입력하세요..."
        required
      />
      <button type="submit">댓글 추가</button>
    </form>
  );
};

export default CommentForm;
