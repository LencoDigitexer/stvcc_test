function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://lencodigitexer.github.io/stvcc_test/0212z02.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}


console.log("test");

console.log(document.querySelector("body > form > table > tbody > tr:nth-child(3) > td:nth-child(2)").textContent);