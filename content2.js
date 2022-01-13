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

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}