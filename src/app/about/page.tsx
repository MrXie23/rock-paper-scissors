export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        About WasteTime Games
      </h1>
      
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-300">Website Introduction</h2>
        <p className="mb-4 text-gray-200">
          WasteTime Games is a platform offering various simple and fun casual games. Our goal is to provide users with a relaxing and enjoyable gaming experience, helping everyone unwind during their leisure time.
        </p>
        <p className="text-gray-200">
          We continuously develop and update more interesting games to give you more options to pass your time.
        </p>
      </div>
      
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-purple-300">Rock Paper Scissors Game</h2>
        <p className="mb-4 text-gray-200">
          Rock Paper Scissors is one of the world's oldest and most popular hand games, enjoyed by people of all ages and cultural backgrounds.
          It's a simple yet engaging game that requires no equipment and can be played anywhere, anytime.
        </p>
        <p className="mb-4 text-gray-200">
          This online version brings the classic game to your browser, allowing you to challenge the computer.
          The game tracks your wins, losses, and draws, featuring beautiful animations to enhance your gaming experience.
        </p>
        <h3 className="text-lg font-semibold mb-2 text-purple-200">Game Rules</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-200">
          <li>Choose one of three options: Rock (✊), Scissors (✌️), or Paper (✋)</li>
          <li>The computer will randomly select one</li>
          <li>Winning rules:
            <ul className="list-circle pl-5 mt-2 space-y-1">
              <li>Rock beats Scissors (Rock wins)</li>
              <li>Scissors beat Paper (Scissors win)</li>
              <li>Paper beats Rock (Paper wins)</li>
              <li>If both choose the same option, it's a draw</li>
            </ul>
          </li>
          <li>The game keeps track of your score</li>
        </ul>
      </div>
      
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-3 text-purple-300">Technical Implementation</h2>
        <p className="mb-4 text-gray-200">
          WasteTime Games is developed using modern web technologies, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-200">
          <li>Next.js framework</li>
          <li>Tailwind CSS library</li>
          <li>React state management</li>
          <li>Responsive design for all devices</li>
          <li>Animation effects</li>
        </ul>
      </div>
    </div>
  );
} 