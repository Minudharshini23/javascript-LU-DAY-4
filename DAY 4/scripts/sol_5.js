//LIST OF PRIME NUMBERS:
console.log("list of prime numbers below:");
let range=prompt("enter the range:");
let count;
for(let i=2;i<=range;i++)
{
    count=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
    {
        count++;
        }
    }
    if(count==2)
    {
        console.log(i);
    }
}