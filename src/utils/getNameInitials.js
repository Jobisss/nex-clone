export function firstAndLastWordFirstLetters(inputString){

  const words = inputString.trim().split(/\s+/);


  if (words.length === 0) {
    return '';
  }


  const firstLetter = words[0][0];


  const lastLetter = words[words.length - 1][0];

  return firstLetter + lastLetter;
}