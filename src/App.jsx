import { useState } from 'react';
import { validateWord } from './utils/validation';
import { isValidEnglishWord } from './utils/api';
import Timer from './components/Timer';
import PlayerCard from './components/PlayerCard';
import WordInput from './components/WordInput';
import WordHistory from './components/WordHistory';

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
  const [time, setTime] = useState(15);
  const [timerKey, setTimerKey] = useState(0);

  const handleTimeout = (action) => {
    if (action === 'tick') {
      setTime((prev) => prev - 1);
    } else {
      setPlayers((prev) =>
        prev.map((p, i) =>
          i === currentPlayer ? { ...p, score: p.score - 1 } : p
        )
      );
      setError('Time up! Point deducted.');
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0));
      setTime(15);
      setTimerKey((k) => k + 1);
    }
  };

  const handleSubmit = async (e) => {
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

    const isEnglish = await isValidEnglishWord(trimmed);
    if (!isEnglish) {
      setPlayers((prev) =>
        prev.map((p, i) =>
          i === currentPlayer ? { ...p, score: p.score - 1 } : p
        )
      );
      setError('Word is not a valid English word');
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
    setTime(15);
    setTimerKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Shiritori Game</h1>

      <div className="flex gap-10 mb-6">
        {players.map((p, i) => (
          <PlayerCard key={i} player={p} isActive={i === currentPlayer} />
        ))}
      </div>

      <div className="flex flex-col items-center mb-3">
        <h2 className="text-xl font-semibold mb-2">
          {players[currentPlayer].name}'s Turn
        </h2>
        <Timer time={time} onTimeout={handleTimeout} resetKey={timerKey} />
      </div>

      <WordInput
        inputWord={inputWord}
        setInputWord={setInputWord}
        handleSubmit={handleSubmit}
        error={error}
      />

      <WordHistory
        wordHistory={wordHistory}
        lastWord={lastWord}
        lastPlayerIndex={currentPlayer === 0 ? 1 : 0}
        players={players}
      />
    </div>
  );
}

export default App;
