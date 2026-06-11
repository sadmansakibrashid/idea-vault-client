import IdeaCard from "@/components/IdeaCard";
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
          <IdeaCard
            key={idea._id}
            idea={idea}
          />
        ))}
      </div>
    </div>
  );
};

export default ideasPage;


