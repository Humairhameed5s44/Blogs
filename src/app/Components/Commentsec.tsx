"use client"
import React, { useState } from "react";
import { Card, CardContent } from "./Card";
import { Button } from "./Button";
import { Input } from "./Input";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentProps {
  postId: string;
}

export default function CommentSec({ postId }: CommentProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;

    const newCommentObj: Comment = {
      id: new Date().toISOString(),
      author: authorName,
      text: newComment,
    };

    setComments((prev) => [...prev, newCommentObj]);
    setNewComment("");
    setAuthorName("");
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (!newComment.trim() || !authorName.trim() || !editingCommentId) return;

    const updatedComments = comments.map((comment) =>
      comment.id === editingCommentId
        ? { ...comment, text: newComment, author: authorName }
        : comment
    );

    setComments(updatedComments);
    setNewComment("");
    setAuthorName("");
    setEditingCommentId(null);
  };

  const handleSubmit = () => {
    if (editingCommentId) {
      handleSaveEditedComment();
    } else {
      handleAddComment();
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments</h2>

      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <Button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-2 text-blue-500"
                  aria-label={`Edit comment by ${comment.author}`}
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-600">No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Enter your name"
          className="w-full mb-2 border border-gray-300 rounded px-2 py-1"
          aria-label="Author name"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Enter your comment"
          className="w-full mb-2 border border-gray-300 rounded px-2 py-1"
          aria-label="Comment text"
        />
        <Button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
