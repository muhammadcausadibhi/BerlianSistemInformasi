function countCharacterFrequency(str) {
    const freq = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1;
    }
  
    for (const char in freq) {
      console.log(`${char} = ${freq[char]}`);
    }
  }

  const inputString = "aaabbcccaaaac";
  countCharacterFrequency(inputString);