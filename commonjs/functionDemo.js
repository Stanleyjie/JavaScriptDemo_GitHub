function sayIt(translator){
    var phrase = translator("hello");
    alert(phrase);
}
function hawaiianTranslator(word){
    if(word === "hello") return "Aloha12";
    if(word === "Goodbye") return "Aloha";
}
sayIt(hawaiianTranslator);