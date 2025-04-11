import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
            Welcome to WasteTime Games
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of casual games to help you pass the time
          </p>
        </section>
        
        {/* Games Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">Game Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rock Paper Scissors Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-6xl">
                <span>✊ ✋ ✌️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Rock Paper Scissors</h3>
                <p className="text-gray-300 mb-4">The classic hand game. Challenge the computer and see who wins!</p>
                <Link 
                  href="/rockpaperscissors" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Play Now
                </Link>
              </div>
            </div>
            
            {/* Coming Soon Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg opacity-70">
              <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-4xl">
                <span className="text-gray-400">Coming Soon</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">More Games</h3>
                <p className="text-gray-300 mb-4">We're developing more fun games. Stay tuned...</p>
                <button 
                  className="inline-block bg-gray-600 text-gray-300 font-bold py-2 px-4 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-purple-300">About Us</h2>
          <p className="text-gray-300 mb-4">
            WasteTime Games is dedicated to providing simple and fun casual games. Our goal is to help you enjoy relaxing gaming experiences during your free time.
          </p>
          <Link 
            href="/about" 
            className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </section>
      </div>
    </div>
  );
}
