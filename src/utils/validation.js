export function validateWord(word, history, lastWord) {
  const lower = word.toLowerCase();

  if (lower.length < 4) {
    return { valid: false, message: 'Word must be at least 4 letters' };
  }

  if (history.includes(lower)) {
    return { valid: false, message: 'Word already used' };
  }

  if (lastWord && lower[0] !== lastWord.slice(-1)) {
    return {
      valid: false,
      message: `Word must start with "${lastWord.slice(-1)}"`,
    };
  }

  return { valid: true };
}
