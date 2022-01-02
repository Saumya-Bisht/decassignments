var array = [];

var a = prompt("enter the first no:-")
a = parseInt(a);
array.push(a);
var a = prompt("enter the second no:-")
a = parseInt(a);
array.push(a);
var a = prompt("enter the third no:-")
a = parseInt(a);
array.push(a);


if((array[0] > array[1]) && (array[0] > array[2]))
{
    console.log("element at index 0 is greatest");
}
else if((array[1] > array[0]) && (array[1] > array[2]))
{
    console.log("element at index 1 is greatest");
}
else
{
    console.log("element at index 2 is greatest");
}