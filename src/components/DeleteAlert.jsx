"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteAlert({idea}) {
    const {_id}= idea;
    const handleDelete = async()=>{
      const {data:tokenData} = await authClient.token()
    const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${_id}`,{
       method:"DELETE",
       headers:{
        "content-type":"application/json",
        authorization: `Bearer ${tokenData?.token}`
       },
    });
    const data = await res.json();
    redirect("/ideas")
    console.log(data);
    }
  return (
    <AlertDialog>
      <Button className={'text-red-500'} variant="outline"><TrashBin/> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete startup idea permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{idea.ideaTitle}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}