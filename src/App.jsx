import { useState } from 'react';
import { validateWord } from './utils/validation';

function App() {
  const [players, setPlayers] = useState([
    { name: 'Player 1', score: 0 },
    { name: 'Player 2', score: 0 },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [wordHistory, setWordHistory] = useState([]);
  const [inputWord, setInputWord] = useState('');
  const [error, setError] = useState('');
  const [lastWord, setLastWord] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = inputWord.trim().toLowerCase();
    if (!trimmed) return;

    const { valid, message } = validateWord(trimmed, wordHistory, lastWord);

    if (!valid) {
      setPlayers((prev) =>
        prev.map((p, i) =>
          i === currentPlayer ? { ...p, score: p.score - 1 } : p
        )
      );
      setError(message);
      setInputWord('');
      return;
    }

    setPlayers((prev) =>
      prev.map((p, i) =>
        i === currentPlayer ? { ...p, score: p.score + 1 } : p
      )
    );
    setWordHistory([...wordHistory, trimmed]);
    setLastWord(trimmed);
    setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
    setError('');
    setInputWord('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Shiritori Game</h1>

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

      {/* Input Box */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <input
          className="border p-2 rounded w-64"
          placeholder="Enter a word"
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

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
