function click(){
    let greenplanet = document.getElementById("greenplanet");
    console.log(greenplanet);
    greenplanet.innerHTML = "去死啦扑街";
    // greenplanet.id = "呀屎啦";
}
/**将函数click赋给属性window.onload。千万不要在函数名后面加括号，
 * 因为这里不是调用函数，
 * 而只是将函数作为一个值赋给属性window.onload。 */
/**
 * 对象window将调用你赋给其属性onload的函数，但仅在
 * 网页加载完毕后才调用。这样，你即使把script元素放在head元素中
 * 也会在完成body元素的加载后才去调用window.onload。
 */
// window.onload = click;