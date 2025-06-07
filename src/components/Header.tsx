
function Header() {
  return (
      <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            STACKPACK
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wider">
            {"— Give me back my boilerplates —"}
          </div>
          <p className="text-xl md:text-2xl text-purple-200 font-medium tracking-wide">
            Pick a starter project and get coding fast.
          </p>
        </div>
  )
}

export default Header
