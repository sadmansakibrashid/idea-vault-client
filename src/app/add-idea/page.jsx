"use client"
import { authClient } from '@/lib/auth-client';
import { FieldError, Input, Label, TextField ,Select, ListBox, TextArea, Button} from '@heroui/react';
import React from 'react';

const AddIdeaPage = () => {
    const onSubmit =async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ideas = Object.fromEntries(formData.entries())
        console.log(ideas)
        const {data:tokenData} = await authClient.token()

         const res= await fetch('http://localhost:5000/ideas',{
          method:'POST',
          headers:{
            'content-type':'application/json',
            authorization: `Bearer ${tokenData?.token}`
          },
          body: JSON.stringify(ideas)
        })
        const data =await res.json()
        console.log(data)
        

    }
    return (
        <div>
            AddIdeaPage

          <form 
          onSubmit={onSubmit}
          className="p-10 space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="md:col-span-2">
      <TextField name="ideaTitle" isRequired>
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
  <TextField name="shortDescription" isRequired>
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
<TextField name="tags">
  <Label>Tags (Optional)</Label>
  <Input
    placeholder="AI, Startup, Education"
    className="rounded-2xl"
  />
  <FieldError />
</TextField>

{/* Image URL */}
<div className="md:col-span-2">
  <TextField name="imageURL" isRequired>
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
<TextField name="estimatedBudget">
  <Label>Estimated Budget (Optional)</Label>
  <Input
    type="number"
    placeholder="15000"
    className="rounded-2xl"
  />
  <FieldError />
</TextField>

{/* Target Audience */}
<TextField name="targetAudience" isRequired>
  <Label>Target Audience</Label>
  <Input
    placeholder="Students, Entrepreneurs, Businesses"
    className="rounded-2xl"
  />
  <FieldError />
</TextField>

{/* Problem Statement */}
<div className="md:col-span-2">
  <TextField name="problemStatement" isRequired>
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
  <TextField name="proposedSolution" isRequired>
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
  <TextField name="detailedDescription" isRequired>
    <Label>Detailed Description</Label>
    <TextArea
      placeholder="Provide detailed information about your startup idea..."
      className="rounded-3xl"
    />
    <FieldError />
  </TextField>
</div>
 </div>
<Button
type="submit"
className="w-full rounded-none bg-cyan-500 text-white">
Submit Idea </Button>
</form>
 </div>
    );
};

export default AddIdeaPage;