function test(){
    for(var i = 0; i < 5; i++){
        // console.log(i);
        // setTimeout(() => console.log(i),0)
        setTimeout(function (){console.log(i)},0); //setTimeout会延迟执行，执行的时候for循环已完成，所以你打印出来的值是i迭代结束之后的值
    }
}
test();