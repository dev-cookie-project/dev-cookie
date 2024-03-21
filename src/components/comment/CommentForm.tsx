"use client";
import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

interface CommentFormProps {
  onCommentAdded: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onCommentAdded }) => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) return;

    const userId = "1"; // 사용자 인증 로직에 따라 변경될 수 있음
    const createdAt = new Date().toISOString();

    try {
      const { data, error } = await supabase.from("comments").insert([
        {
          content,
          userId,
          createdAt,
        },
      ]);

      if (error) {
        throw error;
      }

      if (data) {
        console.log("New comment added successfully:", data);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
    setContent("");
    onCommentAdded(); // 댓글 추가 후 부모 컴포넌트에 알림
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
