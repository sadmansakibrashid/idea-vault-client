"use client";

import { Button, Card, DateField, Input, Label, TextArea } from "@heroui/react";
import React, { useState } from "react";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { CommentDelete } from "./CommentDelete";

const CommentCard = ({ ideaId }) => {
const [commentText, setCommentText] = useState("");
 const { data: session } = authClient.useSession();
  const user = session?.user;
  
  
const handleComment = async () => {
    const commentData = {
      userId:user?.id,
      userName:user?.name,
      commentText,
      createdAt: new Date(),
    };
    const {data:tokenData} = await authClient.token()
    console.log(tokenData)
    
    try {
      const res = await fetch("http://localhost:5000/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(commentData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Comment added successfully!");
        setCommentText("");
      } else {
        toast.error("Failed to add comment");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Card className="border rounded-lg p-5 mt-8">
       
      <h2 className="text-2xl font-bold mb-4">Add Comment</h2>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">


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
  
   {/* <CommentDelete idea={idea._id}></CommentDelete> */}
</div>
    </Card>
  );
};

export default CommentCard;