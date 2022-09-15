
function caesarCipher(s, k) {
    // Write your code here
  const letters = 'abcdefghijklmnopqrstuvwxyz';
    const upperLetters = letters.toUpperCase();
    const rotated = letters.slice(k % 26) + letters.slice(0, k % 26);

    let results = '';
    for(let i = 0; i < s.length; i++) {
      if(letters.includes(s[i])) {
        const letterIndex = letters.indexOf(s[i]);
        results +=rotated[letterIndex];  
      } else if(upperLetters.includes(s[i])) {
        const letterIndex = upperLetters.indexOf(s[i]);
        results +=rotated[letterIndex].toUpperCase();
      } else {
        results +=s[i];
      }
    }
    console.log(results);
    return results;
}
