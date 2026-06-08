import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Transform Ideas into Successful Startups",
    description:
      "Discover innovative business concepts, connect with entrepreneurs, and bring your vision to life.",
    image: "/banner1.jpg",
  },
  {
    id: 2,
    title: "Fuel Innovation Through Collaboration",
    description:
      "Work with creators, mentors, and investors to build impactful solutions for tomorrow.",
    image: "/banner2.jpg",
  },
  {
    id: 3,
    title: "Explore Emerging Technologies",
    description:
      "Stay ahead with insights into AI, fintech, sustainability, and next-generation innovations.",
    image: "/banner3.jpg",
  },
];

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="carousel w-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-3xl text-center text-white px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl mb-8">
                {slide.description}
              </p>

              <Link
                href="/ideas"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition"
              >
                Explore Ideas
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}