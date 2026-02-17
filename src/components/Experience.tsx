const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-purple-500">
        Experience
      </h2>

      <div className="max-w-4xl space-y-8">

        <div className="bg-black p-8 rounded-2xl hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            AI Intern – IIT Kanpur
          </h3>
          <p className="text-sm text-purple-400 mb-4">
            Jan 2025 – Feb 2025
          </p>
          <p className="text-gray-400 leading-relaxed">
            Worked on artificial intelligence concepts and mini-projects, 
            gaining hands-on experience with machine learning algorithms 
            and real-world AI applications.
          </p>
        </div>

        <div className="bg-black p-8 rounded-2xl hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">
            Machine Learning Intern – Tripple One Solutions
          </h3>
          <p className="text-sm text-purple-400 mb-4">
            Jul 2025 – Aug 2025
          </p>
          <p className="text-gray-400 leading-relaxed">
            Worked with real-world datasets, applied supervised and 
            unsupervised learning models, and contributed to model 
            development, evaluation, and performance optimization.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Experience
