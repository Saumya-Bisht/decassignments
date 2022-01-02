var g_class = {

     'students': [


          {
            'name': "naman",
            'marks':  86,
          },
	  {
	    'name': "Saumya Bisht",
            'marks': 98,
	   },
           {
            'name': "tripti",
            'marks':  76,
          },


           {
            'name': "yukti",
            'marks':  98,
          },
           
          {
            'name': "simran",
            'marks':  78,
          }

  ]
  };
 
    
  for(var i = 0; i < g_class.students.length; i = i + 1) {
     
     if(g_class.students[i].marks >= 85) { 
    
     
   console.log("list of students is as follow:",g_class.students[i].name); 

 }  
 }