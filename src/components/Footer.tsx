const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center border-t border-gray-800">
      <p>
        © {new Date().getFullYear()} Shubhi Tiwari. All Rights Reserved.
      </p>
      <p className="text-sm mt-2">
        Built with React & Tailwind CSS 💜
      </p>
    </footer>
  )
}

export default Footer
