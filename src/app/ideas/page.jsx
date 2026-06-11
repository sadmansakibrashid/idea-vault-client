import Image from "next/image";

const ideasPage = async() => {
    const  res =await fetch('http://localhost:5000/ideas');
    const ideas = await res.json();
    console.log(ideas)
   
    return (
         <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Ideas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
            
          <div
            key={idea._id}
            className="border rounded-lg shadow-md p-4"
          >
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
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{idea.tags}</span>
             
            </div>
            
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ideasPage;


