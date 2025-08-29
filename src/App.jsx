import { useState } from 'react';

function App() {
  const [players] = useState([
    { name: 'Player 1', score: 0 },
    { name: 'Player 2', score: 0 },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [wordHistory, setWordHistory] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Shiritori Game</h1>

      {/* Player Scores */}
      <div className="flex gap-10 mb-6">
        {players.map((p, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl shadow ${
              i === currentPlayer ? 'bg-blue-200' : 'bg-white'
            }`}
          >
            <h2 className="font-bold">{p.name}</h2>
            <p>Score: {p.score}</p>
          </div>
        ))}
      </div>

      {/* Word History */}
      <div className="bg-white p-4 rounded-xl shadow w-full max-w-lg">
        <h3 className="font-bold mb-2">Word History</h3>
        <ul className="flex flex-wrap gap-2">
          {wordHistory.map((w, i) => (
            <li key={i} className="px-3 py-1 bg-gray-200 rounded">
              {w}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
