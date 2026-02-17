const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-purple-500">
        Contact Me
      </h2>

      <div className="bg-gray-900 p-10 rounded-2xl w-full max-w-3xl space-y-6 text-center">

        <p className="text-lg text-gray-300">
          I'm open to internships, full-time opportunities, and collaborations.
        </p>

        <div className="space-y-4 text-gray-400">

          <p>
            📧 Email:{" "}
            <a
              href="mailto:shubhitiwari54321@gmail.com"
              className="text-purple-400 hover:underline"
            >
              shubhitiwari54321@gmail.com
            </a>
          </p>

          <p>
            📞 Phone:{" "}
            <a
              href="tel:+919140604144"
              className="text-purple-400 hover:underline"
            >
              +91-9140604144
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/shubhi-tiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              linkedin.com/in/shubhi-tiwari
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Shubhi-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              github.com/Shubhi-glitch
            </a>
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact
