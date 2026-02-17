const Projects = () => {
  const projects = [
    {
      title: "Musical Therapy via Expression",
      description:
        "AI model that detects facial expressions in real-time and recommends music using CNN and OpenCV.",
      github: "https://github.com/Shubhi-glitch/ML-approach-for-musical-therapy-using-facial-expressions",
    },
    {
      title: "Blinkit Sales Forecasting",
      description:
        "Built ML models and Power BI dashboards to forecast demand trends and analyze sales performance.",
      github: "https://github.com/Shubhi-glitch/Blinkit-Sales-Forecasting-Performance-Analysis",
    },
    {
      title: "YouTube Clone",
      description:
        "Full-stack responsive video platform with modern UI and dynamic components.",
      github: "https://github.com/Shubhi-glitch/youtube-clone",
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-purple-500">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 px-4 py-2 rounded-xl text-center hover:bg-purple-700 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl">
        <p className="text-gray-400 mb-6 text-lg">
          Curious about the code? Check out my GitHub for complete project implementations.
        </p>

        <a
          href="https://github.com/Shubhi-glitch"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 px-8 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Visit My GitHub →
        </a>
      </div>
    </section>
  )
}

export default Projects
