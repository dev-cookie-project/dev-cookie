"use client";
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../utils/supabaseClient";
import { Comment } from "@/types/comment-types";

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [tempContent, setTempContent] = useState<string>("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    if (editingCommentId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingCommentId]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase.from("comments").select("*");
      if (error) {
        throw error;
      }
      if (data) {
        setComments(data);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleEdit = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setTempContent(comment.content);
  };

  const handleSave = async (id: number) => {
    if (!tempContent.trim()) return;

    try {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === id ? { ...comment, content: tempContent } : comment
        )
      );

      const { data, error } = await supabase
        .from("comments")
        .update({ content: tempContent })
        .eq("id", id);

      if (error) {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === id
              ? { ...comment, content: comment.content }
              : comment
          )
        );

        throw error;
      }

      setEditingCommentId(null);
      setTempContent("");
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  const handleRemoveComment = async (id: number) => {
    try {
      const { error } = await supabase.from("comments").delete().eq("id", id);
      if (error) {
        throw error;
      }
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {editingCommentId === comment.id ? (
                <>
                  <input
                    ref={editInputRef}
                    type="text"
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                  />
                  <button onClick={() => handleSave(comment.id)}>완료</button>
                  <button
                    onClick={() => {
                      setEditingCommentId(null);
                      setTempContent("");
                    }}
                  >
                    취소
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <span>작성자 ID: {comment.userId}</span>
                    <br />
                    <p>{comment.content}</p>
                    <span>
                      작성일: {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <button onClick={() => handleEdit(comment)}>수정</button>
                  <button onClick={() => handleRemoveComment(comment.id)}>
                    삭제
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </div>
  );
};

export default CommentList;
