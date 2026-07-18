 import MyInteractionPage from "@/app/my-interactions/page";
import CommentCard from "@/components/CommentCard";
import { CommentDelete } from "@/components/CommentDelete";
import { DeleteAlert } from "@/components/DeleteAlert";
import EditComment from "@/components/EditComment";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
 const IdeasDetailPage = async ({ params }) => {
 const { id } =await params;
 const token = await auth.api.getToken({
  headers: await headers()
 })
 console.log(typeof token);
 console.log(token)
 console.log(JSON.stringify(token, null, 2));
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`,{
  headers:{
    authorization: `Bearer ${token.token}`
  }
 })
 const idea = await res.json();
 console.log(idea);
 

  return (
    <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center gap-3 justify-end mt-5 mb-3">
          <EditModal idea={idea}></EditModal>
          <DeleteAlert idea={idea}></DeleteAlert>
        </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Image
          src={idea.imageURL}
          alt={idea.ideaTitle}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
         <div className="p-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
              {idea.category}
            </span>
          </div>
        <h1 className="text-4xl font-bold mb-4">
            {idea.ideaTitle}
          </h1>
        <p className="text-gray-600 text-lg mb-6">
            {idea.shortDescription}
          </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Estimated Budget
              </h3>
              <p>${idea.estimatedBudget}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                Target Audience
              </h3>
              <p>{idea.targetAudience}</p>
            </div>
          </div>
        <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Problem Statement
              </h2>
              <p className="text-gray-700">
                {idea.problemStatement}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Proposed Solution
              </h2>
              <p className="text-gray-700">
                {idea.proposedSolution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                Detailed Description
              </h2>
              <p className="text-gray-700">
                {idea.detailedDescription}
              </p>
            </section>
       <section>
              <h2 className="text-2xl font-semibold mb-2">
                Tags
              </h2>
             <div className="mt-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {idea.tags}
                </span>
              </div>
              <CommentCard idea={idea._id}></CommentCard>
              <MyInteractionPage></MyInteractionPage>
              {/* <CommentDelete idea={idea._id}></CommentDelete> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeasDetailPage;

