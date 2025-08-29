export default function WordHistory({
  wordHistory,
  lastWord,
  lastPlayerIndex,
  players,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-full max-w-lg">
      <h3 className="font-bold mb-2">Word History</h3>
      <ul className="flex flex-wrap gap-2">
        {wordHistory.map((w, i) => {
          const isLast = w === lastWord;
          const playerColor = isLast
            ? lastPlayerIndex === 0
              ? 'bg-blue-300'
              : 'bg-red-300'
            : 'bg-gray-200';
          return (
            <li
              key={i}
              className={`px-3 py-1 rounded ${playerColor} ${isLast ? 'font-bold' : ''}`}
            >
              {w}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
