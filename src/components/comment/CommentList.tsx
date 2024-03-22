"use client";
import React, { useState, useEffect, useRef } from "react";
import { supabase } from "../../utils/supabaseClient";
import { Comment } from "@/types/comment-types";
import CommentForm from "./CommentForm";

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
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("createdAt", { ascending: false });
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
  const handleCommentAdded = () => {
    fetchComments(); // 댓글이 추가되면 댓글 목록을 새로고침
  };

  return (
    <div className="w-full mt-28 flex-col">
      <div className="h-16">
        <h1 className="text-4xl ml-12 font-bold">댓글</h1>
      </div>
      <CommentForm onCommentAdded={handleCommentAdded} />
      {comments.length > 0 ? (
        <ul className="flex flex-col w-full bg-yellow-100">
          {comments.map((comment) => (
            <li
              className="border-solid border rounded-md flex justify-between flex-row-reverse my-4 mx-24 h-52"
              key={comment.id}
            >
              {editingCommentId === comment.id ? (
                <>
                  <div className="mr-3">
                    <button
                      className="btn btn-active btn-neutral m-3"
                      onClick={() => handleSave(comment.id)}
                    >
                      완료
                    </button>
                    <button
                      className="btn btn-active btn-neutral"
                      onClick={() => {
                        setEditingCommentId(null);
                        setTempContent("");
                      }}
                    >
                      취소
                    </button>
                  </div>
                  <input
                    ref={editInputRef}
                    type="text"
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <div className="mr-3">
                    <button
                      className="btn btn-active btn-neutral m-3 "
                      onClick={() => handleEdit(comment)}
                    >
                      수정
                    </button>
                    <button
                      className="btn btn-active btn-neutral"
                      onClick={() => handleRemoveComment(comment.id)}
                    >
                      삭제
                    </button>
                  </div>
                  <div>
                    <p>
                      작성일: {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h1 className="bg-lime-500">작성자 ID: {comment.userId}</h1>
                    <p>{comment.content}</p>
                  </div>
                  <div></div>
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
