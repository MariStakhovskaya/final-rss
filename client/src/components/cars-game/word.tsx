const arrWords = [
  'waiter',
  'menu',
  'starter',
  'dessert',
  'cutlery',
  'appetizers',
  'sandwiches',
  'sides',
  'beverages',
  'fork',
];
const wordsMax = arrWords.length;
const arrLetter = 'abcdefghijklmnopqrstuvwxyz'.split('');
const letterMax = arrLetter.length;

function getRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createWord() {
  const changeWords = arrWords[getRandomNumber(0, wordsMax - 1)].split('');
  const countChangeLetter = getRandomNumber(0, changeWords.length + 5);
  const newWord = changeWords.map((elem, index) => {
    if (index === countChangeLetter) {
      return arrLetter[getRandomNumber(0, letterMax)];
    }
    return elem;
  });
  return newWord.join('');
}

export { createWord, getRandomNumber, arrWords };
