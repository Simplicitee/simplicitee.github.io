var easy = ["dog", "apple", "cat", "happy", "yolo", "sad", "love", "math", "art"];
var hard = ["confusion", "obfuscate", "memorize", "pineapple", "intrigue", "birthday", "atmosphere"];

newAnagram = function(number) {
  var word;
  var correct;
  var rand;
  if (number === 1) {
    rand = Math.floor(Math.random()*easy.length);
    correct = easy.indexOf(rand);
  } else if (number === 2) {
    rand = Math.floor(Math.random()*hard.length);
    correct = hard.indexOf(rand);
  }
  word = scramble(correct);
  
  var input = prompt("Unscramble: " + word);
  calculateAccuracy(input, correct, word);
};
            
calculateAccuracy = function(input, word, scramble) {
  if (input === word) {
    window.alert("You correctly unscrambled the word! +1 point!");
    addPoint();
    return;
  } else if (input === null) {
    resetScore();
    return;
  } else {
    var input = prompt("Incorrect, retry: " + scramble);
    calculateAccuracy(input, word, scramble);
  }
};

addPoint = function() {
  var val = $("points").text();
  $("points").text(val + 1);
};

resetScore = function() {
  $("points").text(0);
};

var scramble = function(word) {
  
};
