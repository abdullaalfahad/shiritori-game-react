export default function PlayerCard({ player, isActive }) {
  return (
    <div
      className={`p-4 rounded-xl shadow ${isActive ? 'bg-blue-200' : 'bg-white'}`}
    >
      <h2 className="font-bold">{player.name}</h2>
      <p>Score: {player.score}</p>
    </div>
  );
}
