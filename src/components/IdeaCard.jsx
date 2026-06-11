import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";



const IdeaCard = ({ idea }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <Image
        src={idea.imageURL}
        alt={idea.ideaTitle}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-3">
        {idea.ideaTitle}
      </h2>

      <p className="text-gray-600 mt-2">
        {idea.shortDescription}
      </p>

      <div className="mt-3">
        <span className="font-medium">Category:</span>{" "}
        {idea.category}
      </div>

      <div>
        <span className="font-medium">Budget:</span> $
        {idea.estimatedBudget}
      </div>

      <div>
        <span className="font-medium">Target Audience:</span>{" "}
        {idea.targetAudience}
      </div>

      <div className="mt-2">
        <span className="font-medium">Problem:</span>
        <p>{idea.problemStatement}</p>
      </div>

      <div className="mt-2">
        <span className="font-medium">Solution:</span>
        <p>{idea.proposedSolution}</p>
      </div>

      <div className="mt-2">
        <span className="font-medium">Details:</span>
        <p>{idea.detailedDescription}</p>
      </div>

      <div className="mt-2">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {idea.tags}
        </span>
      </div>
      <Link href={`ideas/${idea._id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}><FiExternalLink/>Details page</Button></Link>
   
    </div>
  );
};

export default IdeaCard;