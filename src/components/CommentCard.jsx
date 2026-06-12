"use client";

import { Button, Card, DateField, Input, Label, TextArea } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";


const CommentCard = ({ ideaId }) => {
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");
  

  const handleComment = async () => {
    const commentData = {
      ideaId,
      userName,
      commentText,
      createdAt: new Date(),
    };

    const res = await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    const data = await res.json();

    if (data.insertedId) {
      toast.success("Comment added successfully!");

      setUserName("");
      setCommentText("");
    }
  };

  return (
    <Card className="border rounded-lg p-5 mt-8">
       
      <h2 className="text-2xl font-bold mb-4">Add Comment</h2>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
  {/* Name */}
  <div className="md:col-span-3">
    <Input
      label="Name"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Your Name"
    />
  </div>

  {/* Comment */}
  <div className="md:col-span-7">
    <TextArea
      label="Comment"
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="Write your comment..."
    />
  </div>

  {/* Button */}
  <div className="md:col-span-2">
    <Button
      onClick={handleComment}
      className="bg-cyan-500 text-white w-full h-full"
    >
      Submit
    </Button>
  </div>
</div>
    </Card>
  );
};

export default CommentCard;