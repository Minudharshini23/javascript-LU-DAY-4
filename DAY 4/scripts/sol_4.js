console.log("CALCULATOR")
let choice=Number(prompt(`select your choice of operation
1.add
2.subtract
3.multiply
4.divide
5.squareroot
6.percentage`));
// let a=Number(prompt("enter value_1"));
// let b=Number(prompt("enter value_2:"));
switch(choice)
{
    case 1:
        let a=Number(prompt("enter value_1"));
let b=Number(prompt("enter value_2:"));
        console.log("the value is:"+" "+(a+b));
        break;
    case 2:
        let c=Number(prompt("enter value_1"));
        let d=Number(prompt("enter value_2:"));
        console.log("the value is:"+" "+c-d);
        break;
    case 3:
        let e=Number(prompt("enter value_1"));
        let f=Number(prompt("enter value_2:"));
        console.log("the value is:"+" "+e*f);
        break;
    case 4:
        let g=Number(prompt("enter value_1"));
        let h=Number(prompt("enter value_2:"));
        console.log("the value is:"+" "+g/h);
        break;
    case 5:
        let i=Number(prompt("enter value_1"));
        console.log("the value is:"+" "+Math.sqrt(i));
        break;
    case 6:
        let per=Number(prompt("enter value_1"));
        console.log("the value is:"+" "+per/100);
        break;
    default:
        console.log("HAPPY CALCU");
    break;
}
