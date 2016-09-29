var easy = [{anagram: "gdo", word: "dog"}, {anagram: "pepla", word: "dog"}];
var hard = [{anagram: "niofsucno", word: "confusion"}, {anagram: "tecabusfo", word: "obfuscate"}];
Random r = new Random();

newAnagram = function(var number) {
  var rand;
  var word;
  var correct;
  if (number === 1) {
    rand = r.nextInt(easy.size());
    word = easy.indexOf(rand).anagram;
    correct = easy.indexOf(rand).word;
  } else if (number === 2) {
    rand = r.nextInt(easy.size());
    word = hard.indexOf(rand).anagram;
    correct = hard.indexOf(rand).word;
  }
  
  var input = prompt("Unscramble: " + word);
  calculateAccuracy(input, correct);
};
            
calculateAccuracy = function(var input, var word) {
  if (input === word) {
    window.alert("You correctly unscrambled the word! +1 point!");
    return;
};
