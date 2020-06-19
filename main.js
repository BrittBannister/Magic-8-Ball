let answers = ["It is certain", "Reply hazy, try again", "Don’t count on it",
    "It is decidedly so", "Ask again later", "My reply is no",
    "Without a doubt", "Better not tell you now", "My sources say no",
    "Yes definitely", "Cannot predict now", "Outlook not so good",
    "You may rely on it", "Concentrate and ask again", "Very doubtful",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"
]


window.onload = function() {
    let eight = document.getElementById("eight");
    let answer = document.getElementById("answer");
    let eightball = document.getElementById("ball");

    eightball.addEventListener("click", function() {
        eight.innerHTML = "";
        var num = Math.floor(Math.random() * Math.floor(answers.length));
        answer.innerHTML = answers[num];
    });
};