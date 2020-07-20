let ask = (question,yes,no) => {if(confirm(question))
    yes();
    else
    no();
}
let display=ask(
    "Do you agree?",
    function()
    {
        alert("You agreed.");
    },
    function()
    {
        alert("You cancelled the execution");
    }
)
console.log(display);