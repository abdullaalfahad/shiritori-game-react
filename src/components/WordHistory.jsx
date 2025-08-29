export default function WordHistory({ wordHistory }) {
  return (
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
  );
}
