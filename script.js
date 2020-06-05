// // alert("Kaun Hae Bae Tu");
// console.log("Helllooooooo");   
//                                  // will be displayed in the console menu of the inspect window;

// function boss(){
//   console.log("What to do now!!");
// }
// boss();                                 
//              // OR by variable declaration;
 
// var a =function(){
// 	   console.log("Function by variable declaration");
// }
// a();


//         // Using Arguements in function

// function Name(name){
// 	 console.log(name);
// } 
// Name("Rai Rahul");


//         // Using Dual Arguements 
  

// function multiply(a,b) {
//   return a*b ;
//   }  
 
 
// function name(number){
// 	if (number%2===0) {
// 	   return "The number is even";
// 	} else {
// 		return "The number is odd";
// 	}
// } name(5);
// var user = {
// 	name: "Rahul",
// 	age: 20,
//     hobby: "Writing",
//     gender: "Male",
//     array: ["Stay","Home","Stay","Safe"],
//     shout: function(){
//     console.log("OOOOoooooooooo!!!!");
//     }
// };
var Datebase = {
	username:"Rahul" ,
	password:"Sanjayrai" ,
};
                                         // FROM (50-80) THE PROGRAM IS FOR FACEBOOK By Rahul  
var newsfeed = [
  {
  	username:"Biki",
  	timeline:"I m sleeping" ,
  },
  {
  	username:"Mannu",
  	timeline:"I m chatting",
  },
  {
  	username:"Mehboob",
  	timeline:"I m Playing Games",
  }

];
var usernamePrompt = prompt("Enter your Username");
var passwordPrompt = prompt("Enter password");

const signIn =(user, pass) =>
{
	usernamePrompt===Datebase.username && passwordPrompt===Datebase.password ? console.log(newsfeed) : alert(" Sorry Wrong username or password!!!")
} signIn(usernamePrompt,passwordPrompt);


