/*
Pocket Jimple
Official Code.
(C) 2020 - Pocket Inc.
 */

function is(variable, equals) {
    try {
        if (!equals) {
            if (variable) return true;
        }

        if (variable === equals) return true;
        else return false;
    } catch(err) {
        return false;
    }
}
function log(msg) {
   return console.log(msg);
}
function change(elementID, value) {

    document.getElementById(elementID).innerHTML = value;
}
function hide(elementID) {
    document.getElementById(elementID).hidden = true;

}
function show(elementID) {
document.getElementById(elementID).hidden = false;
}
function getInput(inputID) {
return document.getElementById(inputID).value;
}
function changeInput(inputID, value) {
document.getElementById(inputID).value = value;
}
function save(name, value) {
    saveObj = { "data":value };
    saveJSON = JSON.stringify(saveObj);
    localStorage.setItem(name, saveJSON);


}
function load(name) {
    if (localStorage.getItem(name)) {
        loadJSON = localStorage.getItem(name);
        loadObj = JSON.parse(loadJSON);
        return loadObj.data;
    }

}

function ask(question) {
return prompt(question);
}

function changeBackground(url) {
document.body.background = url;
}