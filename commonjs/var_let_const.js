//call the method
continueDemoCode();
console.log("退出方法");

function setTimeOutDemoCode(){
    for(let i = 0; i < 5; i++){
        // console.log(i);
        // setTimeout(() => console.log(i),0)
        setTimeout(function (){console.log(i)},0); //setTimeout会延迟执行，执行的时候for循环已完成，所以你打印出来的值是i迭代结束之后的值
    }
}

function breakDemoCode1(){
    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++){
            console.log(i+j);	
            if((i+j) == 15){
            break;   //跳出内层循环体，继续执行外层循环体；
            }
            console.log("冰肌玉骨，自清凉无汗。水殿风来暗香满");//当i+j等于5的时候，不执行该语句；
        }
        console.log("退出内层循环体");
    }
    console.log("退出外层循环体");
}

function breakDemoCode2(){
    for(let i = 0; i < 10; i++){
            console.log(i);
            if(i == 5){
                break;		//跳出该循环体，立马执行console.log("break退出循环体");
            }
            console.log("已恨桃花容易落，桃花比汝尚多情");
        }
    console.log("退出循环体");
}

function continueDemoCode(){
    for(let i = 0; i < 10; i++){
        console.log(i);
        if(i == 5){
            continue;
        }
        console.log("万事悠悠付酒杯，流年冉冉入霜髭");//当i等于5的时候不执行该语句；
    }
    console.log("退出循环体");
}

function returnDemoCode(){
    for(let i = 0; i < 10; i++){
        console.log(i);
        if(i == 5){
            return;
        }
        console.log("美人不是母胎生，应是桃花树长成");
    }
    console.log("退出循环体");
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