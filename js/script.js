// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
function WordToPigLatin(word){
	if (word.length == 1)
	
	{var vowels = new Array('a','e','i','o','u');
    var isVowel = false;

    for(e in vowels)
    {
      if(vowels[e] == word)
      {
        isVowel = true;
      }
    }

    return isVowel;
  }
	word.slice(-1);
	return word + "ay";
}
}
WordToPigLatin(" ");



function sentenceToPigLatin(sentence) {
	var word = sentence.split(' ');
	for (var i=0; i<word.length;i++);{
	word[i]=sentenceToPigLatin(word[i]);
	return word.join(' ');
	}
}

$(document).ready(function() {
	$("#button").click(function() {
		var sentence = $("#input").val();


console.log(sentence);
	});
});



	// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






	// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
