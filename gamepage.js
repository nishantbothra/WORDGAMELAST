var player_one = localStorage.getItem("player_one");
var player_two = localStorage.getItem("player_two");

var score_one = 0;
var score_two = 0;

document.getElementById("player_one_name").innerHTML = player_one + ": ";
document.getElementById("player_two_name").innerHTML = player_two + ": ";

document.getElementById("player_one_score").innerHTML = score_one;
document.getElementById("player_two_score").innerHTML = score_two;

document.getElementById("player_question").innerHTML = "Question Turn: " + player_one;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_two;

function send() {
    var getword = document.getElementById("word").value;
    var word = getword.toLowerCase();
    console.log(word);

    var character_one = word.charAt(1);
    console.log(character_one);

    var half_length = Math.floor(word.length/2);

    var character_two = word.charAt(half_length);
    console.log(character_two);

    var last_letter = word.length - 1;

    var character_three = word.charAt(last_letter);
    console.log(character_three);

    var remove_one = word.replace(character_one, "_");
    console.log(remove_one);

    var remove_two = remove_one.replace(character_two, "_");
    console.log(remove_two);

    var remove_three = remove_two.replace(character_three, "_");
    console.log(remove_three);

    var question_word = "<h4 id='word_display'>Q."+remove_three+"</h4>";
    var answer = "<br> answer: <input id='word_answer' type='text'>";
    var button = "<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>"
    var combine = question_word + answer + button;
    document.getElementById("output").innerHTML = combine;
    document.getElementById("word").value = "";
}




