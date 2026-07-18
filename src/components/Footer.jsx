import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            IdeaVault
          </h1>
          <p className="mt-4 max-w-xl">
            Discover innovative startup ideas, share your vision, and connect with a community of creators, entrepreneurs, and innovators.
          </p>
        </div>
        <div>
          <ul className="space-y-2">
  <li>
    <Link href={"/"} className="hover:text-white">
      Home
    </Link>
  </li>

  <li>
    <Link href={"/ideas"} className="hover:text-white">
      Ideas
    </Link>
  </li>

  <li>
    <Link href={"/add-idea"} className="hover:text-white">
      Add Idea
    </Link>
  </li>

  <li>
    <Link href={"/my-ideas"} className="hover:text-white">
      My Ideas
    </Link>
  </li>
</ul>
        </div>

        {/* Grid Section */}
        <div>
           <h3 className="text-white mb-3 tracking-wide">CONTACT</h3> 
           <ul className="space-y-2"> 
            <li> Chattogram, Bangladesh</li> 
            <li> support@ideavault.com</li>
             <li> +880 1234-567890</li>
              </ul> 
              </div> 
              </div>
        

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 ideaVault. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;