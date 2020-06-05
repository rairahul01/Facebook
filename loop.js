// Application of for loop      Suppose We need to add the Sirname to the given list of names 

var names = [
      "Rahul",
      "Ajay",
      "Neha",
      "Ranjit",
];
for (var i = 0; i < names.length; i++){
       names[i] = names[i] + " Kumar" ;
       console.log(names[i]);
};


    console.log("Now using While Loop");

                             // Same using While loop
j=0;
while(j < names.length){
      names[j] = names[j] + " Rai";
      console.log(names[j]);
      j++ ;
};


 console.log("Now using Do While Loop");

                        // Same Using Do While loop
k=0;
do {
    names[k]=names[k] + " Guwahati";
    console.log(names[k]);
    k++;
} while (k<names.length);  


 console.log("Now using forEach Loop");
                                             // Using Advanced Loop i.e., forEach   Loop
 names.forEach(function(i,j){
  console.log(i,", Assam")
 }
 ) ; 