console.log("LET'S FIZZBUZZ....!! :-)");
let i=1;

//USER INPUT - RANGE
let n=prompt("enter the range:");

//LOOP
for(i;i<=n;i++)
{
if(i%3==0 && i%5!=0)
{
    console.log(i+":fizz");
}
else if(i%5==0 && i%3!=0)
{
    console.log(i+":buzz");
}
else if(i%3==0 && i%5==0)
{
    console.log(i+":fizzbuzz");
}
else
{
    console.log(i);
}
}