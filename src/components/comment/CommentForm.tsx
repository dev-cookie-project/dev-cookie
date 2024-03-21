"use client";
import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const CommentForm: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) return;

    const userId = "1";
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
        setContent("");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
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
