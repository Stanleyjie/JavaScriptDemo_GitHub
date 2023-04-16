function test(){
    for(var i = 0; i < 5; i++){
        // console.log(i);
        // setTimeout(() => console.log(i),0)
        setTimeout(function (){console.log(i)},0); //setTimeout会延迟执行，执行的时候for循环已完成，所以你打印出来的值是i迭代结束之后的值
    }
}
function typeofTest(){
    let message;
    console.log(message);
    // console.log(age);
    console.log(typeof message);
    console.log(typeof age);
}
function floatTest(){
    let a = 0.1;
        b = 0.2;
    if(a+b == 0.3){
        alert("123")
    }
    console.log(a+b);
}
let a = 6;
let b = 9;
function simpleTag(strings,aVal,bVal,sumVal){
    console.log(strings);
    console.log(aVal);
    console.log(bVal);
    console.log(sumVal);
    return 'foobar';
}
let untaggedResult = `${a}+${b}=${a+b}`;
let taggedResult = simpleTag`${a}+${b}=${a+b}`;
console.log(untaggedResult);
console.log(taggedResult);
// floatTest();