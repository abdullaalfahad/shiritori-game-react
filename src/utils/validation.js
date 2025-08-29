export function validateWord(word, history, lastWord) {
  const lower = word.toLowerCase();

  // Rule 1: minimum length
  if (lower.length < 4) {
    return { valid: false, message: 'Word must be at least 4 letters' };
  }

  // Rule 2: cannot repeat
  if (history.includes(lower)) {
    return { valid: false, message: 'Word already used' };
  }

  // Rule 3: must start with last letter
  if (lastWord && lower[0] !== lastWord.slice(-1)) {
    return {
      valid: false,
      message: `Word must start with "${lastWord.slice(-1)}"`,
    };
  }

  return { valid: true };
}
