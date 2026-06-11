"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField,Select} from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({idea}) {
       const onSubmit =async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ideas = Object.fromEntries(formData.entries())
        console.log(ideas)
          
        

         const res= await fetch(`http://localhost:5000/ideas/${idea._id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(ideas)
        })
        const data =await res.json()
        console.log(data)
       
        

    }
  return (
    <Modal>
     
     <Button variant="outline" className={'rounded-none'}><BiEdit/> Edit</Button>
              
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl max-h-[90vh]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Idea</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6 overflow-y-auto max-h-[70vh]">
              <Surface variant="default">
                     <form 
                         onSubmit={onSubmit}
                         className="p-4 space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="md:col-span-2">
                     <TextField defaultValue={idea.ideaTitle} name="ideaTitle" isRequired>
                       <Label>Idea Title</Label>
                       <Input
                         placeholder="AI-Powered Career Mentor"
                         className="rounded-2xl"
                       />
                       <FieldError />
                     </TextField>
                   </div>
               
               {/* Short Description */}
               <div className="md:col-span-2">
                 <TextField defaultValue={idea.shortDescription} name="shortDescription" isRequired>
                   <Label>Short Description</Label>
                   <Input
                     placeholder="Brief summary of your startup idea"
                     className="rounded-2xl"
                   />
                   <FieldError />
                 </TextField>
               </div>
               
               {/* Category */}
               <div>
                 <Select
                 defaultValue={idea.category}
                   name="category"
                   isRequired
                   className="w-full"
                   placeholder="Select category"
                 >
                   <Label>Category</Label>
               
                   <Select.Trigger className="rounded-2xl">
                     <Select.Value />
                     <Select.Indicator />
                   </Select.Trigger>
               
                   <Select.Popover>
                     <ListBox>
                       <ListBox.Item id="Tech" textValue="Tech">
                         Tech
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
               
                       <ListBox.Item id="Health" textValue="Health">
                         Health
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
               
                       <ListBox.Item id="AI" textValue="AI">
                         AI
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
               
                       <ListBox.Item id="Education" textValue="Education">
                         Education
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
               
                       <ListBox.Item id="Finance" textValue="Finance">
                         Finance
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
               
                       <ListBox.Item id="Environment" textValue="Environment">
                         Environment
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                     </ListBox>
                   </Select.Popover>
                 </Select>
               </div>
               
               {/* Tags */}
               <TextField defaultValue={idea.tags} name="tags">
                 <Label>Tags (Optional)</Label>
                 <Input
                   placeholder="AI, Startup, Education"
                   className="rounded-2xl"
                 />
                 <FieldError />
               </TextField>
               
               {/* Image URL */}
               <div className="md:col-span-2">
                 <TextField defaultValue={idea.imageURL} name="imageURL" isRequired>
                   <Label>Image URL</Label>
                   <Input
                     type="url"
                     placeholder="https://example.com/image.jpg"
                     className="rounded-2xl"
                   />
                   <FieldError />
                 </TextField>
               </div>
               
               {/* Estimated Budget */}
               <TextField defaultValue={idea.estimatedBudget} name="estimatedBudget">
                 <Label>Estimated Budget (Optional)</Label>
                 <Input
                   type="number"
                   placeholder="15000"
                   className="rounded-2xl"
                 />
                 <FieldError />
               </TextField>
               
               {/* Target Audience */}
               <TextField defaultValue={idea.targetAudience} name="targetAudience" isRequired>
                 <Label>Target Audience</Label>
                 <Input
                   placeholder="Students, Entrepreneurs, Businesses"
                   className="rounded-2xl"
                 />
                 <FieldError />
               </TextField>
               
               {/* Problem Statement */}
               <div className="md:col-span-2">
                 <TextField defaultValue={idea.problemStatement} name="problemStatement" isRequired>
                   <Label>Problem Statement</Label>
                   <TextArea
                     placeholder="What problem does your startup solve?"
                     className="rounded-3xl"
                   />
                   <FieldError />
                 </TextField>
               </div>
               
               {/* Proposed Solution */}
               <div className="md:col-span-2">
                 <TextField defaultValue={idea.proposedSolution} name="proposedSolution" isRequired>
                   <Label>Proposed Solution</Label>
                   <TextArea
                     placeholder="Describe your solution"
                     className="rounded-3xl"
                   />
                   <FieldError />
                 </TextField>
               </div>
               
               {/* Detailed Description */}
               <div className="md:col-span-2">
                 <TextField defaultValue={idea.detailedDescription } name="detailedDescription" isRequired>
                   <Label>Detailed Description</Label>
                   <TextArea
                     placeholder="Provide detailed information about your startup idea..."
                     className="rounded-3xl"
                   />
                   <FieldError />
                 </TextField>
               </div>
                </div>
              <Modal.Footer>
            <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
               </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}