function greet(){
    let a=10;
    let b=20;
    function meet(){
        console.log(a);
        console.log(b);
    }
    meet();
    return meet;
}
let ans=greet();
ans();
console.log();
