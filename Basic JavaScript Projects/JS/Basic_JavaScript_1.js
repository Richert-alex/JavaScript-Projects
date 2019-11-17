document.write('Hello, World!');

var A = "This is a string";
document.write(A);

var B = "This is another string";
window.alert(B);

document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded");

document.write("\"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr. Seuss");

var C = "The Tech Academy,"
+ " Learn Coding Anywhere.";
document.write(C)

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";
var Family = Dad.fontcolor("blue");
document.write(Dad);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(3 + 3);

function myFirstFunction () {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}