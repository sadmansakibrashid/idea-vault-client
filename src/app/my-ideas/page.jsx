import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";

const MyIdeasPage = async () => {
  const res = await fetch("http://localhost:5000/ideas", {
    cache: "no-store",
  });

  const ideas = await res.json();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Ideas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map((idea) => (
          <div
            key={idea._id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={idea.imageURL}
              alt={idea.ideaTitle}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {idea.ideaTitle}
              </h2>

              <p className="text-gray-600 mt-2 line-clamp-2">
                {idea.shortDescription}
              </p>

              <div className="mt-3">
                <span className="font-medium">Category:</span>{" "}
                {idea.category}
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <EditModal idea={idea} />
                <DeleteAlert idea={idea} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyIdeasPage;