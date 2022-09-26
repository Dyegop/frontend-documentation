var answers = [];
var results = 0;


answers.push(prompt("What's your name?"));
answers.push(prompt("What's your last name?"));
answers.push(prompt("What's your actual job?"));
answers.push(prompt("How old are you?"));
answers.push(prompt("Where are your from?"));
answers.push(prompt("What's your height in cm?"));
answers.push(prompt("What's your weight in kg?"));
answers.push(prompt("Do you have any pet?"));
answers.push(prompt("What's your pet name?"));
answers.push(prompt("What's your father's name?"));


if (answers[0][0] == answers[1][0]) {
    results += 1;
    console.log("1")
}

if (20 <= answers[3] <= 30) {
    results += 1;
    console.log("2")
}

if (answers[5] > 170) {
    results += 1;
    console.log("3")
}

if (answers[8].slice(-1) == "y") {
    results += 1;
    console.log("4")
}

console.log(results)

if (results == 4) {
    console.log("Agent "+ answers[0] + ", do not forget to do the laundry. Your wife.");
}

if (results != 4) {
    alert("Thank you for your answers. You are safe... now.");
}

