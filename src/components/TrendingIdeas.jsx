"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TrendingIdeas() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`)
      .then((res) => res.json())
      .then((data) => {
        setIdeas(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Trending Ideas</h2>
        <p className="text-gray-500 mt-2">
          Discover the latest innovative startup concepts
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ideas.map((idea) => (
          <div
            key={idea._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={idea.imageURL}
              alt={idea.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">
                {idea.title}
              </h3>

              <p className="text-sm text-blue-600 font-medium mb-2">
                {idea.category}
              </p>

              <p className="text-gray-600 mb-3 line-clamp-2">
                {idea.shortDescription}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                Audience: {idea.targetAudience}
              </p>

              <Link
                href={`ideas/${idea._id}`}
                className="btn btn-primary w-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}