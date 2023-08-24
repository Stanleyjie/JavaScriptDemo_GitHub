let obj = {
    age:25,
    name:"Jim rohn",
    score:{
        Chinese:97,
        Math:99
    }
}
obj.name = "Stanley";
console.log(obj);
console.log(JSON.stringify(obj));
obj.score.English = 91;
console.log(obj);
console.log(JSON.stringify(obj));
