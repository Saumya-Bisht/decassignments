var a = prompt("Enter the number");
a = parseInt(a);
var sum =0;
for(i = 1; i<= a/2; i = i + 1){
    if(a % i == 0) {
	sum = sum + i;

} 
}
if(sum == a)
	{

           alert("number is perfect square");
        }
          else 
	{
            alert("number is not a perfect square");
	}
       