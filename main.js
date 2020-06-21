let answerChoices = ["It is certain", "Reply hazy, try again", "Don’t count on it",
    "It is decidedly so", "Ask again later", "My reply is no",
    "Without a doubt", "Better not tell you now", "My sources say no",
    "Yes definitely", "Cannot predict now", "Outlook not so good",
    "You may rely on it", "Concentrate and ask again", "Very doubtful",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"
]

document.addEventListener("click", function() {
    eight.innerHTML = "";
    let num = Math.floor(Math.random() * Math.floor(answerChoices.length));
    document.getElementById("answer").innerHTML = answerChoices[num];
});