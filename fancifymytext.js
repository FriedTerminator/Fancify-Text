function makeFancy() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "bold";
    textInput.style.color = "blue";
    textInput.style.textDecoration = "underline";
}

function makeBoring() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontWeight = "normal";
    textInput.style.color = "black";
    textInput.style.textDecoration = "none";
}


function addMoo() {
    var textInput = document.getElementById("textInput");
    var parts = textInput.value.split(".");
    textInput.value = parts.join("-Moo.");
}

function bigger() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24px";
    alert("Hello, world!");
}