var easy = [{anagram: "drow", word: "word"}/*"dog", "apple", "cat", "happy", "yolo", "sad", "love", "math", "art"*/];
var hard = ["confusion", "obfuscate", "memorize", "pineapple", "intrigue", "birthday", "atmosphere"];

newAnagram = function(number) {
  var word;
  var correct;
  var rand;
  if (number === 1) {
    rand = Math.floor(Math.random()*10)*(easy.length/10);
    correct = easy[0].word;
    word = easy[0].anagram;
  } else if (number === 2) {
    rand = Math.floor(Math.random()*hard.length);
    correct = hard.indexOf(rand);
  }
  
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
  var val = getElementById("points").innerHtml;
  document.getElementById("points").innerHtml = (new Number(val) + 1);
};

resetScore = function() {
  document.getElementById("points").innerHtml = 0;
};
