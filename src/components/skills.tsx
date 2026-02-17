


const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["C", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Data & AI",
      skills: ["Machine Learning", "AI", "Pandas", "NumPy", "Data Visualization"],
    },
    {
      title: "Analytics Tools",
      skills: ["Excel", "Power BI", "Tableau"],
    },
    {
      title: "Core Concepts",
      skills: ["DBMS", "Software Development Lifecycle (SDLC)"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Business & Marketing",
      skills: ["SEO", "Digital Marketing", "CRM Basics", "Business Communication"],
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-14 text-purple-500">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-black p-8 rounded-2xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 px-4 py-2 rounded-xl text-sm hover:bg-purple-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
