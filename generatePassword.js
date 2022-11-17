const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const special = "!#$%&()*+,-./:;<=>?@[]^_`{}~'\"".split("");
const CheckPassContains = (characters, password) => {
  let num = 0;
  characters.forEach((character) => {
    if (password.includes(character)) num += 1;
  });

  return num > 0 ? true : false;
};
export const generatePassword = (
  numLength,
  includeSpecial,
  includeUpper,
  includeLower,
  includeNumber
) => {
  let upperCase = letters.map((letter) => {
    return letter.toUpperCase();
  });
  let characters = [];
  if (includeSpecial) characters = characters.concat(special);
  if (includeUpper) characters = characters.concat(upperCase);
  if (includeLower) characters = characters.concat(letters);
  if (includeNumber) characters = characters.concat(numbers);

  let password = new Array(numLength).fill("").map((character) => {
    return characters[Math.floor(Math.random() * characters.length)];
  });
  let isValid = true;
  if (includeSpecial) {
    isValid = CheckPassContains(special, password);
  }
  if (includeUpper) {
    isValid = CheckPassContains(upperCase, password);
  }
  if (includeLower) {
    isValid = CheckPassContains(letters, password);
  }
  if (includeNumber) {
    isValid = CheckPassContains(numbers, password);
  }
  if (!isValid)
    return generatePassword(
      numLength,
      includeSpecial,
      includeUpper,
      includeLower,
      includeNumber
    );

  return password.join("");
};