"use client";
import React, { useState, useEffect, useRef } from "react";
import useComment from "../../hooks/useComment";
import { Comment } from "@/types/comment-types";

const CommentList: React.FC = () => {
  const {
    comments,
    handleRemoveComment,
    handleSetEditingComment,
    handleEditComment,
  } = useComment();
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [tempContent, setTempContent] = useState<string>("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingCommentId !== null) {
      editInputRef.current?.focus();
    }
  }, [editingCommentId]);

  const handleEdit = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setTempContent(comment.content);
    handleSetEditingComment(comment);
  };

  const handleSave = (id: number) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      const updatedComment = { ...commentToEdit, content: tempContent };
      handleEditComment(updatedComment);
      setEditingCommentId(null);
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
                  <button onClick={() => handleRemoveComment(comment.id)}>
                    삭제
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
