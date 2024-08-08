/**
 * Capitalize the first letter of the given string.
 * @param {string} data - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
export const capitalisation = (data) => {
  const firstLetter = data.charAt(0).toUpperCase();
  const remainingLetters = data.slice(1).toLowerCase();
  const capitalisedWord = firstLetter + remainingLetters;
  return capitalisedWord;
};
