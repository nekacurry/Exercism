class Bob {
  hey(sentence: string): string {
    sentence = sentence.trim().replace(/[0-9]/g, '');
    if (
      sentence === sentence.toUpperCase() &&
      sentence[sentence.length - 1] === '?' &&
      sentence.length > 1
    )
      return "Calm down, I know what I'm doing!";
    if (
      sentence === sentence.toUpperCase() &&
      sentence.length > 1 &&
      sentence.match(/[A-Za-z]/g)
    )
      return 'Whoa, chill out!';
    if (sentence[sentence.length - 1] === '?') return 'Sure.';
    if (sentence === '') return 'Fine. Be that way!';
    else return 'Whatever.';
  }
}

export default Bob;