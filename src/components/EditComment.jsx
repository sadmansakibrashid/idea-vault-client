"use client";

import React, { useState } from "react";
import { Button, Modal, TextArea } from "@heroui/react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const EditComment = ({ comment }) => {
  const [open, setOpen] = useState(false);
  const [commentText, setCommentText] = useState(
    comment?.commentText || ""
  );

 const handleUpdate = async () => {
  const {data:tokenData} = await authClient.token()
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${comment._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
           authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify({ commentText }),
      }
    );

    console.log("STATUS:", res.status);

    const data = await res.json();
    console.log("RESPONSE:", data);

    if (!res.ok) {
      throw new Error("Request failed");
    }

    if (data.modifiedCount > 0) {
      toast.success("Comment updated!");
      setOpen(false);
    } else {
      toast.error("No changes made");
    }
  } catch (error) {
    console.log("ERROR:", error);
    toast.error("Failed to update comment");
  }
};

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Edit
      </Button>

      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Heading>Edit Comment</Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                <TextArea
                  label="Comment"
                  value={commentText}
                  onChange={(e) =>
                    setCommentText(e.target.value)
                  }
                />
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>

                <Button onClick={handleUpdate}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default EditComment;