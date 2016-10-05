var easy = [{anagram: "gdo", word: "dog"}, {anagram: "pepla", word: "apple"}];
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
  calculateAccuracy(input, correct, word);
};
            
calculateAccuracy = function(var input, var word, var scramble) {
  if (input === word) {
    window.alert("You correctly unscrambled the word! +1 point!");
    addPoint();
    return;
  } else {
    var input = prompt("Incorrect, retry: " + scramble);
    calculateAccuracy(input, word, scramble);
  }
};

addPoint = function() {
  var val = $(".counter").text();
  $(".counter").text(val + 1);
};
