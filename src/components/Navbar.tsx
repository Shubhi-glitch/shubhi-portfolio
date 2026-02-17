const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md text-white flex justify-between items-center px-6 md:px-10 py-4 z-50">

      <h1 className="text-lg md:text-xl font-bold text-purple-500">
        Shubhi.dev
      </h1>

      <div className="hidden md:flex gap-6 md:gap-8 items-center text-sm md:text-base">

        <a href="#about" className="hover:text-purple-400 transition">
          About
        </a>

        <a href="#skills" className="hover:text-purple-400 transition">
          Skills
        </a>

        <a href="#projects" className="hover:text-purple-400 transition">
          Projects
        </a>

        <a href="#experience" className="hover:text-purple-400 transition">
          Experience
        </a>

        <a href="#contact" className="hover:text-purple-400 transition">
          Contact
        </a>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition"
        >
          Resume
        </a>

      </div>

    </nav>
  )
}

export default Navbar
