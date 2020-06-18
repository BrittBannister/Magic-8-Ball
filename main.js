let answers = ["yes", "no", "maybe so", "ask again later", "don't get your hopes up",
    "are you sure you want to know the answer to that?", "definitely",
    "not likely", "doubtful"
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