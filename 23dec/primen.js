var a = parseInt(prompt("Enter a number: "));
    booll = true;
    
    for ( i = 2; i < a; i++) {
        if (a % i == 0) {
            booll = false;
            break;
        }
    }

    if (booll) {
        console.log("it is a prime number");
    } else {
        console.log("it is not a prime number");
    }
 

 
  