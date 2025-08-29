export default function WordInput({
  inputWord,
  setInputWord,
  handleSubmit,
  error,
}) {
  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <input
          className="border p-2 rounded w-64"
          placeholder="Enter a word"
          value={inputWord}
          onChange={(e) => {
            setInputWord(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </>
  );
}
