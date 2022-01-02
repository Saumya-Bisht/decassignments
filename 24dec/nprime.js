var n = prompt("Enter the value of n:");
 var booll;

 for(i = 2; i<= n; i= i + 1){
   booll = true;

     for(j=2; j<=i/2; j = j + 1) {
          if(i%j == 0){
             booll = false; 
             break;

      }
   }

         if(booll == true){
             console.log(i);

  }   
    } 