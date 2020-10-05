const alphabet = [
  'a',
  'A',
  'b',
  'B',
  'c',
  'C',
  'd',
  'D',
  'e',
  'E',
  'f',
  'F',
  'g',
  'G',
  'h',
  'H',
  'i',
  'I',
  'j',
  'J',
  'k',
  'K',
  'l',
  'L',
  'm',
  'M',
  'n',
  'N',
  'o',
  'O',
  'p',
  'P',
  'r',
  'R',
  'q',
  'Q',
  's',
  'S',
  't',
  'T',
  'u',
  'U',
  'v',
  'V',
  'w',
  'W',
  'x',
  'X',
  'y',
  'Y',
  'z',
  'Z'
];

function decode(word, shift) {
  let correctShift = 0;

  if (shift >= 26) correctShift = (shift % 26) * 2;
  else correctShift = shift * 2;

  const array = word.split('');
  const newArray = array.map(el => {
    const index = alphabet.indexOf(el);
    if (index !== -1) {
      let newIndex = index - correctShift;
      if (newIndex < 0) {
        newIndex += 52;
      }
      return alphabet[newIndex];
    }
    return el;
  });
  return newArray.join('');
}

module.exports = decode;
