import { Typewriter } from "react-simple-typewriter"
import Particles from "@tsparticles/react"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white px-6">

      {/* Background Particles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
          },
        }}
      />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Heyya, I'm{" "}
            <span className="text-purple-500">
              Shubhi 👋
            </span>
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-300">
            <Typewriter
              words={[
                "Namaste 🙏 Welcome to my little corner of the internet!",
                "I build impactful digital solutions 🚀",
                "AI • Full Stack • Creative Thinker 💡"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </h2>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl animate-float">
            <img
              src="/subhi.jpeg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
