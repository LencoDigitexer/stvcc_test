var request = new XMLHttpRequest();
request.open("GET", "https://lencodigitexer.github.io/stvcc_test/0212z02.txt", false);
request.send();
var status = request.status;
var text = request.responseText;


var quest = document.querySelector("body > form > table > tbody > tr:nth-child(3) > td:nth-child(2)");
const regex = /(\d+)[^\d]+Какое расширение имеет текстовое приложение Writer?/gm;
var regexp = new RegExp("(\\d+)[^\\d]+" + quest, "gm");
const str = text;
let m;
var typeAnswer = 0;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
        typeAnswer = match;
    });
}

if(typeAnswer == 3){ // если типо вопроса 3, то ответ это первая строка после вопроса
    
    var quest = document.querySelector("body > form > table > tbody > tr:nth-child(3) > td:nth-child(2)");
    var answer = new RegExp(quest.textContent + ".*\n(.*)", "gm");
    console.log(answer);

    answerFound = "";

    while ((m = answer.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === answer.lastIndex) {
            answer.lastIndex++;
        }
    
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            answerFound = match;
        });
    }

    for (let i = 4; i < 8; i++) { // выведет 0, затем 1, затем 2
        try {

            var answerFinal = document.querySelector("body > form > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2)").textContent;
            
            if(answerFinal.trimStart() == answerFound.trimStart())
                document.querySelector("body > form > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2)").style.color = "red";
    
          
        } catch (err) {
          
            console.log("err");
          
        }
    }

    

    

}