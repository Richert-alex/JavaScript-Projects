document.write(typeof "Word");

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function true_Function() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function false_Function() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

function posInfin_Function() {
    document.getElementById("Infin").innerHTML = document.write(3E310);
}

function negInfin_Function() {
    document.getElementById("negInfin").innerHTML = document.write(-3E310);
}

function boole_Function() {
    document.getElementById("boole").innerHTML = document.write(10 > 2);
}

function booleFalse_Function() {
    document.getElementById("booleFalse").innerHTML = document.write(10 < 2);
}

console.log(2 + 2);

function coercion_Function() {
    document.getElementById("coercion").innerHTML = document.write("10" + 5);
}

function equal_Function() {
    document.getElementById("true").innerHTML = document.write(10 == 10);
}

function unequal_Function() {
    document.getElementById("false").innerHTML = document.write(3 == 10);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}