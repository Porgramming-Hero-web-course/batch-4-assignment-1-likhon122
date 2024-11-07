{
  // Problem-3
  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceLower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();

    const words: string[] = sentenceLower.split(" ");

    let count = 0;
    for (const w of words) {
      if (w === wordLower) {
        count++;
      }
    }

    return count;
  };

  const wordAppears: number = countWordOccurrences(
    "I love TypeScript",
    "typescript"
  );

  console.log(wordAppears);
}
